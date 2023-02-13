/* eslint-disable react/function-component-definition */
import React, { InputHTMLAttributes, useState } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<InputTextProps> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      style={{ height: 50, borderRadius: 2 }}
      value={inputValue}
      name={name}
      onChange={handleChange}
    />
  );
};

export default TextInput;
