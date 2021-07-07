import React from 'react';
import './styles/App.scss';
import GitHubLogo from './img/social/github-black.svg';
import Joke from './components/Joke';
import SocialLink from './components/SocialLink';

const App: React.FC = () => (
  <main className="App" data-testid="App-background">
    <header className="App-header" data-testid="App-header">
      <h1>super-jokes</h1>
    </header>
    <SocialLink
      alt="GitHub link"
      uri="https://github.com/jfgilmore/super-jokes"
      src={GitHubLogo}
    />
    <Joke />
  </main>
);

export default App;
