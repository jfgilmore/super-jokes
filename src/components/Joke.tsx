import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../styles/Joke.scss';
import { JokeType } from './types';
import ButtonAction from './ButtonAction';

axios.defaults.baseURL = 'https://official-joke-api.appspot.com'; // process.env.REACT_APP_JOKES_URI;

const Joke: React.FC = () => {
  const [joke, setJoke] = useState<JokeType | undefined>(undefined);
  const [pending, setPending] = useState<boolean>(false);

  const getJoke = async () => {
    const response: AxiosResponse<JokeType> = await axios.get('random_joke');
    setJoke(response.data);
    setPending(false);
  };

  const handleClick = () => {
    setPending(true);
    getJoke();
  };

  return (
    <div className="joke-container" data-testid="container">
      <div className="joke" data-testid="joke">
        <p id="joke-setup" data-testid="joke-setup">
          {joke && joke.setup}
        </p>
        <p id="joke-pucnhline" data-testid="joke-punchline">
          {joke && joke.punchline}
        </p>
        <ButtonAction
          pending={pending}
          callback={handleClick}
          btnText={joke === undefined ? 'Tell me a joke' : 'Tell me another'}
          btnClass="btn-get-joke"
        />
      </div>
    </div>
  );
};

export default Joke;
