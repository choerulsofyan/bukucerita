import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'lg' | 'default';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = undefined,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <button
      type="button"
      className={['btn', size !== 'default' ? `btn-${size}` : '', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
