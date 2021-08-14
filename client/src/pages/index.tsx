import { useState, ChangeEvent, MouseEvent } from 'react';

import { api } from '../services/api';
import { motion } from 'framer-motion';

import { BsSearch } from 'react-icons/bs';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

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
      console.log('Please enter city name');
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
    </div>
  );
}
