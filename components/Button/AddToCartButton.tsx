import React from 'react';

interface IProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IProps) => {
  return (
    <div>
      <button onClick={onClick}> {title}</button>
    </div>
  );
};

export default Button;
