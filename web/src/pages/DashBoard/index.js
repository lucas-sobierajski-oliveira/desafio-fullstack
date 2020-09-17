import React, { useCallback } from 'react';
import { useSpring } from 'react-spring';
import { ImExit } from 'react-icons/im';
import { useAuth } from '../../hooks/AuthContext';

import profitfy_logo from '../../assets/profitfy_logo.svg';

import { Container, Image, H1, Button } from './styles';

function DashBoard() {
  const { state, dispatch } = useAuth();
  const transition = useSpring({
    from: { transform: 'translateY(100px)',},
    to: { transform: 'translateY(1px)', },
  });

  const handleLogout = useCallback(()=>{
    dispatch({
      type: '@SAIR',
    })
  },[dispatch]);


  return (
    <Container style={transition}>
      <Image src={profitfy_logo} style={transition} alt="ProfitFy.me logo"/>
      <div className="wellcome">
        <div className="wrapper">
          <h2>Bem vindo</h2>
          <H1 style={transition}>{state.name}</H1>
        </div>
        <Button onClick={() => handleLogout()}>
          <ImExit size={40}/>
        </Button>
      </div>
    </Container>
  );
}

export default DashBoard;
