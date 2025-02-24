import React, { ReactElement } from 'react';
import './Button.css';
import { Size, State, Variant, Width } from './propTypes';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    label?: string;
    size?: Size;
    state?: State;
    width?: Width;
    leadingIcon?: ReactElement;
    trailingIcon?: ReactElement;
    iconOnly?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({ 
    variant = Variant.Primary, 
    label, 
    size = Size.Medium, 
    state = State.Default, 
    width = Width.Auto, 
    leadingIcon,
    trailingIcon,
    iconOnly,
    className,
    disabled,
    ...props 
}) => {
    const classes = [
        'lus_button',
        `lus_button__${size}`,
        `lus_button__${variant}`,
        `lus_button__${state}`,
        `lus_button__${width}`,
        iconOnly ? 'lus_button__icon-only' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button 
            className={classes}
            disabled={disabled || state === State.Disabled}
            {...props}
        >
            {iconOnly ? (
                iconOnly
            ) : (
                <>
                    {leadingIcon && <span className="lus_button__leading-icon">{leadingIcon}</span>}
                    {label && <span className="lus_button__label">{label}</span>}
                    {trailingIcon && <span className="lus_button__trailing-icon">{trailingIcon}</span>}
                </>
            )}
        </button>
    );
};

export default Button;
