import React from 'react';
import './index.css'; 

const Input = (props) => {
    const {
        type = "text",
        placeholder = "input your text",
        value,
        onChange,
        disabled = false,
        label,
        danger = false
    } = props;

    const inputClassName = `input ${danger ? 'danger' : ''}`;
    const labelClassName = `label ${danger ? 'danger' : ''}`;

    return (
        <div className="input-container">
            {label && <label className={labelClassName}>{label}</label>}
            <input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
