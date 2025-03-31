import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  const handleClick = () => {
    console.log('Button clicked!');
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}