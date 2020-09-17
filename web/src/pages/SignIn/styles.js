import styled from 'styled-components';

export const Button = styled.button`
  margin: 30px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: #7DD56F;
  box-shadow: 0px 4px 10px rgba(125, 213, 111, 0.4);
  border-radius: 4px;
  width: 160px;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.9px;

  color: #FFFFFF;

  &:hover{
    background: #65AD58;
  }

  img {
    margin-right: 14px;
  }

  @media(max-width: 748px) {
    margin: 20px auto 0 auto;
    width: 180px;
    height: 48px;
    font-size: 18px;
  }

  @media(max-width: 456px) {
    margin: 20px auto 0 auto;
    width: 180px;
    height: 46px;
    font-size: 18px;
  }

`;
