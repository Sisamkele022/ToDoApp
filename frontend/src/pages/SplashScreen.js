import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const SplashScreen = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding'); // Use navigate instead of history.push
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashContainer>
      <AppTitle>WomenToDoApp</AppTitle>
    </SplashContainer>
  );
};

export default SplashScreen;

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.pastelPink};
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 3rem;
  animation: fadeIn 3s ease-in-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
