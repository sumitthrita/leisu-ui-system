import React from 'react';
import './Button.css';
import { Design, Size, State, Variant, Width } from './propTypes';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    label?: string;
    size?: Size;
    state?: State;
    width?: Width;
    design?: Design;
    bgColor?: string;
    textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = Variant.Primary, label, size = Size.Small, state = State.Enabled, width = Width.Auto, design = Design.Curved, bgColor = "3ABEF9", textColor = "#000" ,...props }) => {
    const colorClass = ""; 
    return <button className={['lus_button', `lus_button__${size}`, `lus_button__${variant}`, `lus_button__${state}`, `lus_button__${width}`, `lus_button__${design}` ].join(' ')} style={{ backgroundColor: colorClass }} { ...props } >{label}</button>;
};

export default Button;
