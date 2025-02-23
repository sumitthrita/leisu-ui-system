import React from 'react';
import './Heading.css';
export interface HeadingProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    position?: 'afterLabel' | 'beforeLabel' | 'rightCorner'
}

const Heading: React.FC<HeadingProps> = ({ label, size='small' ,...props }) => {
    return <div className={['lus_heading', `lus_heading__${size}`].join(' ')} { ...props } >{label}</div>;
};

export default Heading;