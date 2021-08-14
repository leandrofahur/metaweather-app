import { useState, ChangeEvent, MouseEvent } from 'react';

import { api } from '../services/api';

import { BsSearch } from 'react-icons/bs';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { Container, Card } from './styles';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default function Home() {
  const [cityName, setCityName] = useState<string>('');

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
    console.log(result.data.current);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
