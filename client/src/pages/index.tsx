import Image from 'next/image';

import { useState, ChangeEvent, MouseEvent } from 'react';

import { api } from '../services/api';

import { BsSearch } from 'react-icons/bs';
import NoImage from '../assets/noImage.png';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { Container, Card, Info } from './styles';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

interface IRequest {
  name: string;
  country: string;
  temperature: number;
  feelslike: number;
  weather_icons: string[] | '';
  weather_descriptions: string[];
  humidity: number;
}

export default function Home() {
  const [cityName, setCityName] = useState<string>('');
  const [forecast, setForecast] = useState<IRequest>();
  //   {
  //   name: '',
  //   country: '',
  //   temperature: 0,
  //   feelslike: 0,
  //   weather_icons: [],
  //   weather_descriptions: [''],
  //   humidity: 0,
  // });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCityName(event.target.value);
  };

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    event.preventDefault();
    if (cityName === undefined || cityName === '') {
      toast.error('Please Insert The City Name', {
        pauseOnHover: true,
        closeOnClick: true,
        position: 'bottom-right',
      });
      return;
    }

    requestForecast(cityName);

    setCityName('');
  };

  const requestForecast = async (cityName: string) => {
    const result = await api.get(
      `/current?access_key=${process.env.API_KEY}&query=${cityName}`,
    );

    setForecast({
      name: result.data.location.name,
      country: result.data.location.country,
      temperature: result.data.current.temperature,
      feelslike: result.data.current.feelslike,
      weather_icons: result.data.current.weather_icons,
      weather_descriptions: result.data.current.weather_descriptions,
      humidity: result.data.current.humidity,
    });
    console.log(forecast);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {forecast === undefined ? (
        <Card
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={NoImage} alt="No icon" width={200} height={200} />
          <Info
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, easings: 'easeInOut' }}
          >
            No information to display
          </Info>
        </Card>
      ) : (
        <Card>
          <Image
            src={forecast.weather_icons.at(0) as string}
            width={200}
            height={200}
            alt="Weather icon"
          />
          <Info>
            <h4>
              Name:<span>{forecast.name}</span>
            </h4>
            <h4>
              Country:<span>{forecast.country}</span>
            </h4>
            <h4>
              Temperature:<span>{forecast.temperature}</span>°C
            </h4>
            <h4>
              Feelslike:<span>{forecast.feelslike}</span>°C
            </h4>
          </Info>
        </Card>
      )}
      <Input
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={event => {
          handleChange(event);
        }}
      >
        <BsSearch />
      </Input>
      <Button
        background="#333"
        onClick={event => {
          handleClick(event);
        }}
      >
        Search
      </Button>
    </Container>
  );
}
