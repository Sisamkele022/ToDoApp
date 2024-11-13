import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaHeartbeat, FaRunning, FaCheckCircle, FaRegCalendarCheck, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';

// Onboarding Component
const Onboarding = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <Parallax bgImage="https://source.unsplash.com/1600x900/?nature,wellness" strength={300}>
      <OnboardingContainer>
        {/* Profile Icon */}
        <ProfileIcon onClick={navigateToProfile}>
          <FaUserCircle size={36} color="#fff" />
        </ProfileIcon>

        <GlassCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedIllustration />

          <Title>Unleash Your Potential</Title>
          <Subtitle>The Ultimate To-Do App for Every Woman's Journey</Subtitle>

          <ProgressBar>
            <Progress />
          </ProgressBar>

          <FeaturesList>
            <FeatureItem>
              <IconWrapper>
                <FaRunning size={36} />
              </IconWrapper>
              <FeatureText>Dynamic Workday Planner</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <FaLeaf size={36} />
              </IconWrapper>
              <FeatureText>Mindful Daily Tasks</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <FaHeartbeat size={36} />
              </IconWrapper>
              <FeatureText>Wellness & Health Focus</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <FaRegCalendarCheck size={36} />
              </IconWrapper>
              <FeatureText>Track Goals & Dreams</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <FaCheckCircle size={36} />
              </IconWrapper>
              <FeatureText>Empowering Workouts</FeatureText>
            </FeatureItem>
          </FeaturesList>

          <CustomButton onClick={handleStart}>Begin Your Journey</CustomButton>
        </GlassCard>
      </OnboardingContainer>
    </Parallax>
  );
};

export default Onboarding;

// Lottie Animation Component
const AnimatedIllustration = () => (
  <Player
    autoplay
    loop
    src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
    style={{ height: '200px', width: '200px', marginBottom: '20px' }}
  />
);

// Styled Components
const floatParticles = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const neonGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const OnboardingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(145deg, #240b36, #c31432);
  background-size: 400% 400%;
  animation: ${neonGradient} 12s ease infinite;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.3); // Adding a shadow for depth
`;

const ProfileIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const GlassCard = styled(motion.div)`
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 100%;
  text-align: center;
  margin: auto;
  animation: ${floatParticles} 6s ease-in-out infinite;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05); // Subtle hover effect
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(90deg, #ff6ec4, #7873f5, #17e9e0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 25px;
  font-family: 'Dancing Script', cursive;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #e0e0e0;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 2s ease-out;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: #eee;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const Progress = styled.div`
  width: 75%;
  height: 100%;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  border-radius: 3px;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  color: #ff9a9e;
  filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
  animation: ${floatParticles} 4s ease-in-out infinite;
`;

const FeatureText = styled.span`
  color: #fff;
`;

const CustomButton = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    background: linear-gradient(135deg, #4a00e0, #8e2de2);
    transform: scale(1.05);
  }
`;
