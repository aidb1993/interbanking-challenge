import React, { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ size = "medium", color = "primary", ...props }: ButtonProps) => {
  const className = [classes.button, classes[size], classes[color]].join(" ");

  return <button data-testid="common-button" className={className} {...props} />;
};

export default Button;
