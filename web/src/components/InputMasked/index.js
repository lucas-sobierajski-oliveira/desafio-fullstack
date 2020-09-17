import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';

import { Container } from './styles';

function Input({ name, icon, mask, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.setInputValue('');
      },
    })
  },[fieldName, registerField]);

  return (
    <Container className="input">
      <div className="input-wrapper">
        <img src={icon} alt="icone do input"/>
        <InputMask maskChar=" " mask={mask} ref={inputRef} {...rest} />
      </div>
      { error && <span>{error}</span>}
    </Container>

  );
}

export default Input;
