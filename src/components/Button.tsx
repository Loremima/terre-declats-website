import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}) => {
  const baseClasses = "font-light uppercase tracking-wider rounded-full transition-all duration-300 border";

  const sizeClasses = {
    sm: "text-xs py-1.5 px-4",
    md: "text-sm py-2 px-6",
    lg: "text-base py-3 px-8"
  };

  const variantClasses = {
    primary: "bg-transparent border-black text-black hover:bg-black hover:text-white",
    secondary: "bg-transparent border-black text-black hover:bg-gray-100"
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;