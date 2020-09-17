import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

function ToastContainer({ messages }) {
  // Receive the messages and create a transition each
  const messagesTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { bottom: '-130%', opacity: 0 },
      enter: { bottom: '10px', opacity: 1 },
      leave: { bottom: '-130%', opacity: 0},
     }
  )

  // Render a new toast
  return (
    <>
      { messagesTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          message={item}
          style={props}
        />
      ))}
    </>
  );
}

export default ToastContainer;
