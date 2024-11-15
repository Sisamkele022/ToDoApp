import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaShieldAlt, FaSmile, FaHeartbeat, FaUserTie, FaBicycle } from 'react-icons/fa';

const WorkoutRoutine = () => {
  const navigate = useNavigate();

  return (
    <WorkoutContainer>
      <Overlay />
      <Title>Take Control of Your Fitness Journey</Title>
      <Quote>"The only bad workout is the one that didn’t happen."</Quote>
      <GridWrapper>
        <GoalButton onClick={() => navigate('/goal/fitness')} color="#a8dadc">
          <IconWrapper>
            <FaDumbbell />
          </IconWrapper>
          Fitness Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/weight-loss')} color="#ffafcc">
          <IconWrapper>
            <FaRunning />
          </IconWrapper>
          Weight Loss Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/endurance')} color="#c9e4f7">
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          Endurance Goal
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/muscle-gain')} color="#ffd2a6">
          <IconWrapper>
            <FaSmile />
          </IconWrapper>
          Muscle Gain Goal
        </GoalButton>

        {/* New Goals */}
        <GoalButton onClick={() => navigate('/goal/heart-health')} color="#ff6666">
          <IconWrapper>
            <FaHeartbeat />
          </IconWrapper>
          Heart Health
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/mental-health')} color="#8e44ad">
          <IconWrapper>
            <FaUserTie />
          </IconWrapper>
          Mental Health
        </GoalButton>

        <GoalButton onClick={() => navigate('/goal/cycling')} color="#8fd3e8">
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

// Styled Components
const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
  background: url('https://your-image-url-here.jpg') no-repeat center center/cover; /* Background image of a fitness app */
  height: 100vh;
  text-align: center;
  box-sizing: border-box;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for better text visibility */
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 20px;
  animation: ${hoverEffect} 2s ease-in-out infinite;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* Stronger text shadow for better visibility */
`;

const Quote = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
  font-style: italic;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* Stronger text shadow for better visibility */
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Smaller column width */
  gap: 20px;
  width: 100%;
  max-width: 1100px;
`;

const GoalButton = styled.button`
  padding: 40px 50px;
  font-size: 1.7rem;
  color: #fff;
  background-color: ${(props) => props.color || '#f7e1d7'};
  border: 2px solid ${(props) => props.color || '#f7e1d7'};
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: rotate(-3deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  animation: ${hoverEffect} 3s ease-in-out infinite;
  overflow: hidden;
  
  &:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => darkenColor(props.color || '#f7e1d7', 0.1)};
    border-color: ${(props) => darkenColor(props.color || '#f7e1d7', 0.1)};
  }

  &:active {
    transform: rotate(-3deg) scale(0.98);
  }
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
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
