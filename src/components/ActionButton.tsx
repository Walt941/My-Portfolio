import React from 'react';

interface ActionButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    text: string | React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'secondary';
    fullWidth?: boolean;
    className?: string;
    animate?: boolean;
    animationDelay?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  disabled = false,
  text,
  type = 'button',
  color = 'primary',
  fullWidth = false,
  animate = false,
  animationDelay = '0ms',
  className = ''
}) => {
  const colorClasses = {
    primary: 'bg-text-secondary text-[#1F252E] hover:bg-opacity-90 hover:shadow-[0_0_15px_#00E8F8]',
    secondary: 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#38BDF8]/90'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${colorClasses[color]}
        font-medium py-2 px-4 rounded-lg
        transition-all duration-300
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${animate ? 'animate-navani opacity-0' : ''}
        ${className}
      `}
      style={{
        animationDelay: animate ? animationDelay : undefined,
        animationFillMode: animate ? 'forwards' : undefined
      }}
    >
      {text}
    </button>
  );
};

export default ActionButton;