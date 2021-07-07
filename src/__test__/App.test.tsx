import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('the application', () => {
  const { getByText, getByTestId } = render(<App />);

  const background = getByTestId('App-background');
  const header = getByTestId('App-header');
  const headerText = getByText('super-jokes');
  const containerElement = getByTestId('container');
  const gitHubLink = getByTestId('github-link');
  const gitHubImg = gitHubLink.firstChild;

  describe('background', () => {
    it('renders correctly', () => {
      expect(background).toBeVisible();
    });
  });

  describe('header', () => {
    it('renders correctly', () => {
      expect(header).toBeVisible();
      expect(headerText).toBeVisible();
    });
  });

  describe('joke container', () => {
    it('renders correctly', () => {
      expect(containerElement).toBeVisible();
      // expect(containerElement).toHaveClass('joke-container');
    });
  });

  describe('github link', () => {
    it('renders correctly', () => {
      expect(gitHubLink).toBeVisible();
      expect(gitHubImg).toBeVisible();
    });
  });
});
