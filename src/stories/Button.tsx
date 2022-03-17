import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this button has outline style?
   */
  isOutlined?: boolean;
  /**
   * What button color to use
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'link';
  /**
   * What button color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'default' | 'lg';
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
  isOutlined = false,
  size = undefined,
  color = undefined,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  color = color ? color : 'secondary';
  const outline = isOutlined ? 'outline-' : '';
  return (
    <button
      type="button"
      className={[
        'btn',
        size ? `btn-${size}` : '',
        color ? `btn-${outline}${color}` : ''
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
