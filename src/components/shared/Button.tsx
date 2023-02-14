/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  backgroundColor: string;
  height?: number;
  isLoading?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  backgroundColor,
  textColor,
  height,
  isLoading,
  onClick,
}) => {
  return (
    <button
      type={type}
      className="btn"
      style={{ backgroundColor, color: textColor, height, borderRadius: 2 }}
      onClick={onClick}
      disabled={isLoading}
    >
      {text}
    </button>
  );
};

export default Button;
