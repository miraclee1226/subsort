import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <LoginLayout>
            <LoginHeader>Log in with Google</LoginHeader>
            <Button>Login</Button>
        </LoginLayout>
    );
};

export default Login;

const LoginLayout = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginHeader = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
