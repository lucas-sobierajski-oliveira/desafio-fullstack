import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%);

  .wrapper {
    margin: auto 0;
    width: 547px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      margin-bottom: 26px;

      img {
        margin: 26px 0 0 0;
      }
    }
  }

  .form-wrapper {
    background: #F8F9FE;
    width: 100%;
    color: #94A3B3;
    border-radius: 6px;

    padding: 46px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input + .input {
      margin-top: 20px;
    }

    h4 {
      font-weight: normal;
      text-align:center;
      font-size: 16px;
      margin-bottom: 40px;
    }

    p {
      font-size: 12px;
      margin: 32px auto;
      text-align: center;
    }
  }

  .bottom-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 16px;

    font-weight: 600;
    font-size: 16px;

    a {
      color: #fff;
    }
  }

  @media(max-width: 748px) {
    width: 100%;

    .wrapper {
      width: 75%;

      .logo {
        margin: 20px 0;
        img {
          width: 230px;
        }
      }
      h4 {
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 16px;
      }
    }

    .form-wrapper {
      padding: 20px;

      .input + .input{
        margin-top: 18px;
      }

      p {
        margin: 20px auto 0 auto;
      }
    }

    .bottom-options {
      margin: 10px 0 0 0 ;

      font-size: 18px;

    }
  }

  @media(max-width: 456px) {

    width: 100%;

    .wrapper {
      width: 90%;

      .logo {
        margin: 20px 0;
        img {
          width: 230px;
        }
      }

      h4 {
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 16px;
      }
    }

    .form-wrapper {
      padding: 20px;

      .input + .input{
        margin-top: 18px;
      }

      p {
        margin: 20px auto;
      }
    }

    .bottom-options {
      margin: 10px;

      font-size: 18px;

    }
  }

`;


export const Button = styled.button`
  margin: 0 auto;
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
