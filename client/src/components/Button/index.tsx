import { ButtonHTMLAttributes } from 'react';

import { MotionButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background: string;
};

export const Button: React.FC<ButtonProps> = ({
  background,
  children,
  onClick,
  ...rest
}) => {
  return (
    <>
      <MotionButton
        type="button"
        initial={{ background: `${background}` }}
        whileHover={{ filter: 'brightness(0.9)', scale: 1.01 }}
        whileTap={{ color: '#fff', scale: 0.99 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </MotionButton>
    </>
  );
};
