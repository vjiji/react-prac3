import React from 'react'

function Buttons(props) {
  const { label, styleClass, onClick, disabled } = props;
  return (
  <button className={styleClass} onClick={onClick} disabled={disabled}>
    {label}
  </button>
  );
}


export default Buttons