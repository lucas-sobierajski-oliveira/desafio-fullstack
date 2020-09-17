import React, { useEffect } from 'react';

import { AiOutlineCheckCircle } from 'react-icons/ai';

import { HiInformationCircle } from 'react-icons/hi';
import { BiErrorAlt } from 'react-icons/bi';
import { useToast } from '../../../hooks/Toast';

import { Container } from './styles';

const icons = {
  error: <BiErrorAlt size={40} />,
  success: <AiOutlineCheckCircle size={40} />,
  info: <HiInformationCircle size={40} />
}

function Toast({ message, style }) {
  const { deleteToast } = useToast();

  useEffect(()=>{
    const timer = setTimeout(()=> {
      deleteToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [message.id, deleteToast])

  return (
    <Container type={message.type} style={style}>
        {icons[message.type || 'info']}
        <div className="wrapper">
          <div className="message">
            <strong>{message.description}</strong>
          </div>
        </div>
    </Container>
  );
}

export default Toast;
