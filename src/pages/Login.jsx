import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import Button from "../ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  padding: 2.4rem 4rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Login() {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {displaySignUp === false ? (
        <LoginLayout>
          <Logo />
          <Heading as="h4">Log in to your account</Heading>
          <LoginForm />
          <Button onClick={() => setDisplaySignUp(!displaySignUp)}>
            Sign-up!
          </Button>
        </LoginLayout>
      ) : (
        <Box>
          <SignupForm
            displaySignUp={displaySignUp}
            setDisplaySignUp={setDisplaySignUp}
          />
        </Box>
      )}
    </>
  );
}

export default Login;
