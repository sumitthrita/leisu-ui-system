import './Button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    label: string;
}

const Button: React.FC<ButtonProps> = ({ variant, label, ...props }) => {
    const colorClass = variant === 'primary' ? 'blue' : 'green'; 
    return <button style={{ backgroundColor: colorClass }} { ...props } >{label}</button>;
};

export default Button;