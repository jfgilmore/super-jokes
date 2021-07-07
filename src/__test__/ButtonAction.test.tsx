import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ButtonAction from '../components/ButtonAction';

afterEach(cleanup);

describe('button action component', () => {
  const test1 = 'test-one';
  const test2 = 'test-two';
  const props = {
    pending: false,
    callback: () => {},
    btnText: test1,
    btnClass: test1,
  };
  const callbackProp = () => {
    props.btnClass = test2;
    props.btnText = test2;
  };

  props.pending = false;
  props.callback = callbackProp;
  props.btnText = test1;
  props.btnClass = test1;

  const { getByTestId } = render(<ButtonAction {...props} />);

  const htmlBtn = getByTestId('action-btn');
  // const btnText = htmlBtn.firstChild;

  describe('button', () => {
    it('renders correctly', () => {
      expect(htmlBtn).toBeVisible();
      expect(htmlBtn).toContainHTML(test1);
      expect(htmlBtn).toHaveProperty('id', test1);
    });
  });

  fireEvent.click(htmlBtn);

  describe('button after being clicked', () => {
    it('renders changed props', () => {
      expect(htmlBtn).toBeVisible();
      expect(htmlBtn).toContain(test2);
      expect(htmlBtn).toHaveProperty('id', test2);
    });
  });
});
