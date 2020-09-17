import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  input {
    border: 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background: #FFFFFF;
    height:  44px;
    width: 456px;
    padding-left: 40px;
    font-weight: 400;
    font-size: 17.5px;
    color: #A0A4A8;
  }

  input::placeholder{
    font-style: normal;
    letter-spacing: 0.01em;
    font-weight: 400;
    font-size: 17.5px;
    color: #A0A4A8;
  }

  .input-wrapper {
    position: relative;
    width: 100%;

    img {
      position: absolute;
      left: 12px;
      margin: auto 0;
      top: 0;
      bottom: 0;
    }
  }

  span {
    color: red;
    position: absolute;

    font-size: 12px;
    bottom: -18px;
  }


  @media(max-width: 748px) {

    input {
      width: 100%;
      height: 50px;
    }

    img {
      width: 16px;
      height: 16px;
    }

    span {
      bottom: -16px;
    }
  }

  @media(max-width: 456px) {

    input {
      width: 100%;
      height: 50px;
    }

    img {
      width: 16px;
      height: 16px;
    }

    span {
      bottom: -16px;
    }
  }
`;
