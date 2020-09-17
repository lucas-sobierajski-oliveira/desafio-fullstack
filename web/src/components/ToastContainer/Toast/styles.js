import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastVatiations = {
  info: css`
    border-bottom: 10px solid blue;
    svg{
      color: blue;
    }
  `,
  success: css`
    border-bottom: 10px solid green;
    svg{
      color: green;
    }
  `,
  error : css`
    border-bottom: 10px solid red;
    svg{
      color: red;
    }
  `
}

export const Container = styled(animated.div)`
  background-color: #F8F9FE;

  display: flex;
  align-items: center;
  padding: 20px;

  position: fixed;
  bottom : 20px;
  right: 10px;

  height: 80px;
  width: 350px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  & + div {
    margin-top: 90px;
  }

  ${props => toastVatiations[props.type || 'info']}

  > svg {
    margin-right: 20px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex: 1;

    button {
      right: 8px;
      top: 8px;
      position: absolute;

    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.9;
    }
  }
`;

