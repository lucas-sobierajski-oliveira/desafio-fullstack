import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 40px;
  }
  .wellcome {
    background: #F8F9FE;
    width: 50%;
    color: #9192A5;
    border-radius: 6px;

    padding: 46px;
    display: flex;
    align-items: center;
    justify-content: center;

    .wrapper {
      margin-right: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-weight: normal;
      font-size: 28px;
      letter-spacing: 1px;
    }
  }

  @media(max-width: 748px) {
    img {
      width: 400px;
    }
    .wellcome{
      width: 80%;
    }
  }

  @media(max-width: 456px) {
    img {
      width: 300px;
    }
    .wellcome{
      width: 90%;
    }
  }
`;

export const Image = styled(animated.img)`
`;

export const H1 = styled(animated.h1)`
  text-transform: uppercase;
  margin-bottom: 20px;
`
export const Button = styled(animated.button)`
  color: #9192A5;
  height: 40px;

  &:hover {
    color: rgba(0,0,0,0.8);
  }
`;
