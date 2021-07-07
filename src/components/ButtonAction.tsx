import React from 'react';

type props = {
  pending: boolean;
  callback: () => void;
  btnText: string;
  btnClass: string;
};

const ButtonAction: React.FC<props> = ({
  pending,
  callback,
  btnText,
  btnClass,
}) => (
  <button
    type="button"
    id={btnClass}
    disabled={pending}
    onClick={callback}
    data-testid="action-btn"
  >
    {btnText}
  </button>
);

export default ButtonAction;
