import React from 'react';
import './styles.css';

function Grid({children, ...props}) {
  return <div className='grid' {...props}>{children}</div>;
}

export default Grid;
