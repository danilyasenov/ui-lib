import React from 'react';
import './index.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-content">{text}</div>
    </div>
  );
};

export default Tooltip;
