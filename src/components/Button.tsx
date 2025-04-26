import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseClasses = "font-light text-sm uppercase tracking-wider py-2 px-6 rounded-full transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-transparent hover:bg-black border border-black text-black hover:text-white",
    secondary: "bg-transparent hover:bg-black border border-black text-black hover:text-white"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;