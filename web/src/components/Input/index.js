import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ name, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  },[fieldName, registerField]);

  return (
    <Container className="input">
      <div className="input-wrapper">
        <img src={icon} alt="icone do input"/>
        <input ref={inputRef} {...rest} />
      </div>
      { error && <span>{error}</span>}
    </Container>

  );
}

export default Input;
