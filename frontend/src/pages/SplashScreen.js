import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashContainer>
      <LogoContainer>
        <LeafIcon />
        <AppTitle>WomenToDoApp</AppTitle>
        <Slogan>Balancing Life, One Checkmark at a Time</Slogan>
      </LogoContainer>
    </SplashContainer>
  );
};

export default SplashScreen;

// Styled Components with enhanced animations and styles
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 0.5; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffb6c1, #f8a5c2, #fab1a0);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideUp} 2s ease-out;
`;

const LeafIcon = styled(FaLeaf)`
  color: #fff;
  font-size: 4rem;
  animation: rotate 2s infinite alternate;
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(15deg); }
  }
`;

const AppTitle = styled.h1`
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  margin-top: 20px;
  letter-spacing: 3px;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 2.5s ease-in-out;
`;

const Slogan = styled.p`
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  margin-top: 15px;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 3s ease-in-out forwards;
  letter-spacing: 1px;
`;
