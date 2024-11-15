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

    // Initialize tasks for each day and notes
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Notes'];
    const initialTasks = {};
    daysOfWeek.forEach((day) => {
      initialTasks[day] = day === 'Notes' ? '' : Array(8).fill(''); // Notes have a single string; others have 8 tasks
    });

    setTasks(initialTasks);
  }, []);

  // Handle task input change
  const handleChange = (day, index, value) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [day]: day === 'Notes'
        ? value // Update notes as a string
        : prevTasks[day].map((task, i) => (i === index ? value : task)), // Update tasks for specific day
    }));
  };

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('weeklyTasks', JSON.stringify(tasks));
  }, [tasks]);

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
              <DateTitle>
                {day !== 'Notes' && currentWeek[idx]
                  ? currentWeek[idx].toLocaleDateString()
                  : ''}
              </DateTitle>
            </DayHeader>
            {day === 'Notes' ? (
              <NotesInput
                placeholder="Add your weekly notes here..."
                value={tasks['Notes']}
                onChange={(e) => handleChange('Notes', 0, e.target.value)}
              />
            ) : (
              tasks[day]?.map((task, index) => (
                <TaskInput
                  key={index}
                  type="text"
                  value={task}
                  onChange={(e) => handleChange(day, index, e.target.value)}
                  placeholder={`Task ${index + 1}`}
                />
              ))
            )}
          </DayContainer>
        ))}
      </PlannerGrid>
      <Footer>Designed with 💖 for You</Footer>
    </PlannerContainer>
  );
};

export default WeeklyPlanner;

// Styled Components
const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, #fbd3e9, #d3c9e7);
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #3b3a45;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  font-weight: bold;
`;

const PlannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 20px;
  overflow-y: auto;
`;

const DayContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #f3f3f3;

  &:hover {
    transform: scale(1.05);
  }
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DayTitle = styled.h3`
  font-size: 1.4rem;
  color: #3b3a45;
  font-weight: bold;
`;

const DateTitle = styled.p`
  font-size: 1.2rem;
  color: #a6a6a6;
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e8c8d8;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-bottom: 12px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f76b8a;
  }
`;

const NotesInput = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #e8c8d8;
  border-radius: 8px;
  font-size: 1.1rem;
  resize: none;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f76b8a;
  }
`;

const Footer = styled.div`
  margin-top: 30px;
  color: #3b3a45;
  font-size: 1rem;
  text-align: center;
`;
