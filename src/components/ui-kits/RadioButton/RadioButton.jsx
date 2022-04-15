import React from 'react';
import './styles.css';

const RadioButton = ({label, type = 'ghost',...inputProps}) => {
  const labelClass = `btn-label-container btn-${type} ${inputProps.checked && `btn-active-${type}`}`;

  return (
    <div className='radio-btn'>
      <input id={inputProps.id} type="radio" {...inputProps} />
      <label
        className={labelClass}
        htmlFor={inputProps.id}
      >
        {label && <span className='btn-label'>{label}</span>}
      </label>
    </div>
  );
};

export default RadioButton;
