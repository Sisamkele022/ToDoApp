import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaShieldAlt, FaSmile, FaHeartbeat, FaUserTie, FaBicycle } from 'react-icons/fa';

const WorkoutRoutine = () => {
  const navigate = useNavigate();

  return (
    <WorkoutContainer>
      <Title>Take Control of Your Fitness Journey</Title>
      <Quote>"The only bad workout is the one that didn’t happen."</Quote>
      <GridWrapper>
        <GoalButton onClick={() => navigate('/goal/fitness')} color="#FF6EC7">
          <IconWrapper>
            <FaDumbbell />
          </IconWrapper>
          Fitness Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/weight-loss')} color="#FF8C42">
          <IconWrapper>
            <FaRunning />
          </IconWrapper>
          Weight Loss Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/endurance')} color="#6C5B7B">
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          Endurance Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/muscle-gain')} color="#FFD166">
          <IconWrapper>
            <FaSmile />
          </IconWrapper>
          Muscle Gain Goal
        </GoalButton>

        {/* New Goals */}
        <GoalButton onClick={() => navigate('/goal/heart-health')} color="#FF4F58">
          <IconWrapper>
            <FaHeartbeat />
          </IconWrapper>
          Heart Health
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/mental-health')} color="#9B59B6">
          <IconWrapper>
            <FaUserTie />
          </IconWrapper>
          Mental Health
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/cycling')} color="#61C0BF">
          <IconWrapper>
            <FaBicycle />
          </IconWrapper>
          Cycling Goal
        </GoalButton>
      </GridWrapper>
    </WorkoutContainer>
  );
};

export default WorkoutRoutine;

// Keyframes for animations
const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const iconAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const bounceEffect = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Styled Components
const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
  background: #FFCCE5; /* Pure pastel pink background */
  height: 100vh;
  text-align: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  animation: ${bounceEffect} 1.5s ease-in-out infinite;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  font-weight: bold;
`;

const Quote = styled.p`
  font-size: 1.7rem;
  color: #fff;
  font-family: 'Cursive', sans-serif;
  margin-bottom: 40px;
  font-style: italic;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1100px;
`;

const GoalButton = styled.button`
  padding: 50px 60px;
  font-size: 1.8rem;
  color: #fff;
  background-color: ${(props) => props.color || '#f7e1d7'};
  border: 2px solid ${(props) => props.color || '#f7e1d7'};
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transform: rotate(-5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  animation: ${hoverEffect} 3s ease-in-out infinite;
  
  &:hover {
    transform: rotate(0deg) scale(1.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => darkenColor(props.color || '#f7e1d7', 0.1)};
    border-color: ${(props) => darkenColor(props.color || '#f7e1d7', 0.1)};
  }

  &:active {
    transform: rotate(-5deg) scale(0.98);
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 15px;
  animation: ${iconAnimation} 2s ease-in-out infinite;
`;

const darkenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const r = (num >> 16) + percent * 255;
  const g = ((num >> 8) & 0x00ff) + percent * 255;
  const b = (num & 0x0000ff) + percent * 255;
  return `#${(1 << 24) | (Math.min(r, 255) << 16) | (Math.min(g, 255) << 8) | Math.min(b, 255)
    .toString(16)
    .slice(1)}`;
};
