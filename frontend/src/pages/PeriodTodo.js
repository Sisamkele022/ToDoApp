import React from 'react';
import styled from 'styled-components';
import { FaTint, FaDumbbell, FaAppleAlt, FaRunning, FaCoffee, FaRegHeart, FaBed, FaTv, FaCookieBite, FaPen } from 'react-icons/fa'; // Correct icons

const PeriodTodo = () => {
  // Define tasks as an array of objects with necessary information
  const todos = [
    { id: 1, title: 'Drink Water', phase: 'Morning', completed: false, icon: <FaTint /> },  // Replaced FaGlassWater with FaTint
    { id: 2, title: 'Yoga or Stretching', phase: 'Morning', completed: false, icon: <FaDumbbell /> },
    { id: 3, title: 'Have a Healthy Breakfast', phase: 'Morning', completed: false, icon: <FaAppleAlt /> },
    { id: 4, title: 'Morning Walk', phase: 'Day', completed: false, icon: <FaRunning /> },
    { id: 5, title: 'Drink Herbal Tea (Chamomile)', phase: 'Day', completed: false, icon: <FaCoffee /> },
    { id: 6, title: 'Mindful Break or Meditation', phase: 'Day', completed: false, icon: <FaRegHeart /> },
    { id: 7, title: 'Take a Nap', phase: 'Afternoon', completed: false, icon: <FaBed /> },
    { id: 8, title: 'Watch your favorite feel-good show', phase: 'Evening', completed: false, icon: <FaTv /> },
    { id: 9, title: 'Treat yourself to chocolate', phase: 'Anytime', completed: false, icon: <FaCookieBite /> },
    { id: 10, title: 'Journal your thoughts', phase: 'Anytime', completed: false, icon: <FaPen /> },
];


  const jokes = [
    "Why don’t periods ever tell jokes? They’re always so heavy!",
    "I’d love to tell you a joke about my period, but I’m just going to leave it there.",
    "Periods are like good friends. You know they’re coming, but you’re never quite prepared for it.",
    "Why did the girl bring a tampon to the party? Because she’s on a ‘flow’!",
  ];

  return (
    <PageContainer>
      <PageTitle>
        Urggg, it's that time of the month again... But remember, you're a queen, and you've got this!
      </PageTitle>
      
      <TasksContainer>
        {todos.map((task) => (
          <TaskCard key={task.id}>
            <IconContainer>{task.icon}</IconContainer>
            <TaskContent>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskPhase>{task.phase}</TaskPhase>
            </TaskContent>
          </TaskCard>
        ))}
      </TasksContainer>

      <MotivationContainer>
        <h2>Motivational Quote of the Day</h2>
        <Quote>
          "You are stronger than you think, and more amazing than you know."
        </Quote>
      </MotivationContainer>

      <JokeContainer>
        <h2>Period Joke Time!</h2>
        <Joke>{jokes[Math.floor(Math.random() * jokes.length)]}</Joke>
      </JokeContainer>
    </PageContainer>
  );
};

export default PeriodTodo;

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #fef2f6;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #f76c6c;
  margin-bottom: 20px;
  text-align: center;
`;

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
`;

const TaskCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: #f76c6c;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TaskTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
`;

const TaskPhase = styled.p`
  font-size: 1rem;
  color: #888;
  margin: 0;
  font-style: italic;
`;

const MotivationContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 1.3rem;
  color: #333;
`;

const Quote = styled.p`
  font-style: italic;
  color: #f76c6c;
  font-size: 1.5rem;
  margin-top: 10px;
`;

const JokeContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 1.3rem;
  color: #333;
`;

const Joke = styled.p`
  color: #f76c6c;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 10px;
`;

