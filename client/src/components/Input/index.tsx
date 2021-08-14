import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

import { Container, MotionInput } from './styles';

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  children,
  onChange,
  value,
  ...rest
}) => {
  return (
    <>
      <Container>
        {children}
        <MotionInput
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </Container>
    </>
  );
};
