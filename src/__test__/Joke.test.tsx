import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Joke from '../components/Joke';

afterEach(cleanup);

describe('the application', () => {
  const btnText = 'Tell me a joke';
  const { getByTestId } = render(<Joke />);

  const container = getByTestId('joke');
  const setup = getByTestId('joke-setup');
  const punchline = getByTestId('joke-punchline');
  const requestButton = getByTestId('action-btn');

  describe('the joke', () => {
    it('to exist', () => {
      expect(container).toBeInTheDocument();
    });

    it('contains the setup and punchline', () => {
      expect(setup).toBeVisible();
      expect(punchline).toBeVisible();
    });

    fireEvent.click(requestButton);

    it('displays a joke after being clicked', () => {
      expect(setup).toBeVisible();
      expect(punchline).toBeVisible();
      // Need to test HTML content, mock axios call
    });
  });

  describe('the joke request button', () => {
    it('renders correctly', () => {
      expect(requestButton).toBeVisible();
      expect(requestButton).toContainHTML(btnText);
    });
  });
});
