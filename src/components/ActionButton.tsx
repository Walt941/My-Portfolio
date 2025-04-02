import React from 'react';

interface ActionButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    text: string | React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' ;
    fullWidth?: boolean;
    className?: string;
  }

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  disabled = false,
  text,
  type = 'button',
  color = 'primary',
  fullWidth = false,

}) => {
  const colorClasses = {
   primary: 'bg-blue-600 hover:bg-blue-700'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${colorClasses[color]}
        text-white px-4 py-2 rounded-md transition-colors 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${fullWidth ? 'w-full' : ''}
       
      `}
    >
      {text}
    </button>
  );
};

export default ActionButton;