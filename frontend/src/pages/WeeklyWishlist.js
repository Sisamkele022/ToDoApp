import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WeeklyPlanner = () => {
  const [tasks, setTasks] = useState({});
  const [currentWeek, setCurrentWeek] = useState([]);

  // Get the current week's dates dynamically
  const getWeekDates = () => {
    const startOfWeek = new Date();
    const dayOfWeek = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek); // Set to the previous Sunday (or current day)
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
      weekDates.push(currentDate);
    }

    return weekDates;
  };

  // Initialize tasks and current week's dates
  useEffect(() => {
    const weekDates = getWeekDates();
    setCurrentWeek(weekDates);

    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('weeklyTasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      const initialTasks = {};
      weekDates.forEach(date => {
        const day = date.toLocaleString('en-us', { weekday: 'long' });
        initialTasks[day] = [];
      });
      setTasks(initialTasks);
    }
  }, []);

  // Handle task input change
  const handleChange = (day, index, value) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day][index].text = value;
    setTasks(updatedTasks);
    localStorage.setItem('weeklyTasks', JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
  };

  // Add a new task
  const handleAddTask = (day) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day] = [...updatedTasks[day], { text: '', completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem('weeklyTasks', JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
  };

  // Delete a task
  const handleDeleteTask = (day, index) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day] = updatedTasks[day].filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('weeklyTasks', JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
  };

  // Mark task as completed
  const handleToggleCompleted = (day, index) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day][index].completed = !updatedTasks[day][index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('weeklyTasks', JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
  };

  // Ensure currentWeek has been set before rendering
  if (currentWeek.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <PlannerContainer>
      <Title>Weekly Planner</Title>
      <PlannerGrid>
        {Object.keys(tasks).map((day, idx) => (
          <DayContainer key={idx}>
            <DayHeader>
              <DayTitle>{day}</DayTitle>
              <DateTitle>{currentWeek[idx] ? currentWeek[idx].toLocaleDateString() : 'Loading...'}</DateTitle>
            </DayHeader>
            {tasks[day].map((task, index) => (
              <TaskRow key={index}>
                <TaskInput
                  type="text"
                  value={task.text}
                  onChange={(e) => handleChange(day, index, e.target.value)}
                  placeholder={`Task ${index + 1}`}
                  completed={task.completed}
                />
                <CompleteCheckbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleCompleted(day, index)}
                />
                <DeleteButton onClick={() => handleDeleteTask(day, index)}>❌</DeleteButton>
              </TaskRow>
            ))}
            <AddTaskButton onClick={() => handleAddTask(day)}>+ Add Task</AddTaskButton>
          </DayContainer>
        ))}
      </PlannerGrid>
      <Footer>Designed with 💖 for You</Footer>
    </PlannerContainer>
  );
};

export default WeeklyPlanner;

// Styled components with pastel pink colors and animations
const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #ffccd5, #f9e4e9);
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #d36e9c;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;
`;

const PlannerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const DayContainer = styled.div`
  width: 250px;
  margin: 10px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff9ac8;
  color: white;
  padding: 10px;
`;

const DayTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const DateTitle = styled.span`
  font-size: 0.9rem;
  color: #f4a6c3;
`;

const TaskRow = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  animation: slideIn 0.5s ease;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ff9ac8;
  border-radius: 6px;
  outline: none;
  background-color: #f9e4e9;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #d36e9c;
  }
`;

const CompleteCheckbox = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background: #ff5c8d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e04e75;
  }
`;

const AddTaskButton = styled.button`
  margin-top: 20px;
  background-color: #ff9ac8;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #d36e9c;
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #d36e9c;
`;

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const slideIn = `
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
