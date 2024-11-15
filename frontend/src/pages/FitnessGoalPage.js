import React, { useState } from 'react';
import styled from 'styled-components';
import { FaDumbbell, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FitnessGoalPage = () => {
  const [tasks, setTasks] = useState([
    { week: 'Week 1', task: 'Start with light cardio (3 days)', completed: false },
    { week: 'Week 1', task: 'Complete 2 full-body workouts', completed: false },
    { week: 'Week 2', task: 'Increase cardio duration by 10 minutes', completed: false },
    { week: 'Week 2', task: 'Complete 3 full-body workouts', completed: false },
    { week: 'Week 3', task: 'Add strength training exercises (2 days)', completed: false },
    { week: 'Week 3', task: 'Increase weight on exercises', completed: false },
    { week: 'Week 4', task: 'Add HIIT sessions (2 days)', completed: false },
    { week: 'Week 4', task: 'Track progress and evaluate fitness levels', completed: false }
  ]);
  
  const navigate = useNavigate();

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <FitnessGoalContainer>
      <Header>
        <IconWrapper>
          <FaDumbbell />
        </IconWrapper>
        <GoalTitle>Fitness Goal</GoalTitle>
      </Header>

      <ToDoList>
        {tasks.map((task, index) => (
          <TaskWrapper key={index}>
            <TaskWeek>{task.week}</TaskWeek>
            <TaskDescription>{task.task}</TaskDescription>
            <TaskStatus onClick={() => handleToggleTask(index)}>
              {task.completed ? <FaCheckCircle color="#FF6EC7" size={30} /> : <FaRegCircle color="#FF6EC7" size={30} />}
            </TaskStatus>
          </TaskWrapper>
        ))}
      </ToDoList>

      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </FitnessGoalContainer>
  );
};

export default FitnessGoalPage;

// Styled Components
const FitnessGoalContainer = styled.div`
  background: #FFCCE5;
  height: 100vh;
  padding: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-right: 15px;
`;

const GoalTitle = styled.h1`
  font-size: 3.5rem;
  color: #FF6EC7;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

const ToDoList = styled.div`
  width: 100%;
  max-width: 800px;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TaskWeek = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF6EC7;
`;

const TaskDescription = styled.div`
  font-size: 1.2rem;
  flex: 1;
  margin: 0 20px;
  text-align: left;
`;

const TaskStatus = styled.div`
  cursor: pointer;
  font-size: 2rem;
`;

const BackButton = styled.button`
  background-color: #FF6EC7;
  color: #fff;
  font-size: 1.5rem;
  padding: 12px 30px;
  border-radius: 20px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3e88;
  }
`;
