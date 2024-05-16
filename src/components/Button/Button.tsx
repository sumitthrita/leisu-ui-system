import React from 'react';
import './Button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    label: string;
    size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ({ variant, label, size='small' ,...props }) => {
    const colorClass = variant === 'primary' ? 'pink' : 'green'; 
    return <button className={['lus_button', `lus_button__${size}`].join(' ')} style={{ backgroundColor: colorClass }} { ...props } >{label}</button>;
};

export default Button;