import React from 'react';
import './Button.css';

const Button = ({ handleClick, text, className }) => (
    <button className={`btn ${className}`} onClick={handleClick}>
        {text}
    </button>
);

export default Button;
