import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  FaTasks,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaSun,
  FaHeart,
  FaDumbbell,
  FaListAlt,
  FaShoppingCart,
} from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <AnimatedBackground />
      <Title>Choose Your To-Do List</Title>
      <GridWrapper>
        <StickyNoteButton onClick={() => navigate('/workday-todo')} color="#f7a7b9">
          <IconWrapper>
            <FaTasks />
          </IconWrapper>
          Workday To-Do
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/structured-todo')} color="#f6c6d0">
          <IconWrapper>
            <FaListAlt />
          </IconWrapper>
          Structured To-Do
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/period-todo')} color="#fad2bb">
          <IconWrapper>
            <FaCalendarAlt />
          </IconWrapper>
          Period To-Do
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/relaxed-todo')} color="#f9d1e3">
          <IconWrapper>
            <FaSun />
          </IconWrapper>
          Relaxed To-Do
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/weekly-wishlist')} color="#e1c7f1">
          <IconWrapper>
            <FaHeart />
          </IconWrapper>
          Weekly Wishlist
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/monthly-goals')} color="#d5d8f5">
          <IconWrapper>
            <FaRegCalendarCheck />
          </IconWrapper>
          Monthly Goals
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/workout-routine')} color="#f1c8f5">
          <IconWrapper>
            <FaDumbbell />
          </IconWrapper>
          Workout Routine
        </StickyNoteButton>

        <StickyNoteButton onClick={() => navigate('/shopping-list')} color="#f7e1d7">
          <IconWrapper>
            <FaShoppingCart />
          </IconWrapper>
          Shopping List
        </StickyNoteButton>
      </GridWrapper>
    </HomeContainer>
  );
};

export default Home;

// Keyframes for animations
const floatEffect = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

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

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const moveShapes = keyframes`
  0% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.5; }
`;

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f7c8d6, #f2c2e5);
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #7f56d9;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 30px;
  animation: ${floatEffect} 2s ease-in-out infinite;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1100px;
`;

const StickyNoteButton = styled.button`
  padding: 40px 60px;
  font-size: 1.8rem;
  color: #fff;
  background-color: ${(props) => props.color || '#f7e1d7'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.15);
  transform: rotate(-3deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  animation: ${hoverEffect} 3s ease-in-out infinite, ${floatEffect} 2s ease-in-out infinite;

  &:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: rotate(-3deg) scale(0.98);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  animation: ${iconAnimation} 2s ease-in-out infinite;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f7c8d6, #f2c2e5, #d4aff0, #c2d9ed);
  background-size: 300% 300%;
  animation: ${backgroundAnimation} 15s ease infinite;
  z-index: -1;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: ${moveShapes} 10s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    left: 25%;
  }

  &::after {
    top: 70%;
    right: 20%;
  }
`;