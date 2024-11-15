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

    // Set initial tasks for each day with empty values
    const initialTasks = {};
    weekDates.forEach(date => {
      const day = date.toLocaleString('en-us', { weekday: 'long' });
      initialTasks[day] = Array(8).fill(''); // 8 empty fields for each day
    });
    setTasks(initialTasks);
  }, []);

  // Handle task input change
  const handleChange = (day, index, value) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [day]: prevTasks[day].map((task, i) =>
        i === index ? value : task
      ),
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
        {Object.keys(tasks).slice(0, 6).map((day, idx) => (
          <DayContainer key={idx}>
            <DayHeader>
              <DayTitle>{day}</DayTitle>
              <DateTitle>{currentWeek[idx] ? currentWeek[idx].toLocaleDateString() : 'Loading...'}</DateTitle>
            </DayHeader>
            {tasks[day].map((task, index) => (
              <TaskInput
                key={index}
                type="text"
                value={task}
                onChange={(e) => handleChange(day, index, e.target.value)}
                placeholder={`Task ${index + 1}`}
              />
            ))}
          </DayContainer>
        ))}

        <SaturdayContainer>
          <DayHeader>
            <DayTitle>Saturday</DayTitle>
            <DateTitle>{currentWeek[5] ? currentWeek[5].toLocaleDateString() : 'Loading...'}</DateTitle>
          </DayHeader>
          {tasks['Saturday'].map((task, index) => (
            <TaskInput
              key={index}
              type="text"
              value={task}
              onChange={(e) => handleChange('Saturday', index, e.target.value)}
              placeholder={`Task ${index + 1}`}
            />
          ))}
        </SaturdayContainer>

        {/* Notes Section */}
        <NotesContainer>
          <NotesHeader>Notes</NotesHeader>
          <NotesInput
            placeholder="Add your weekly notes here..."
            onChange={(e) => handleChange('Notes', 0, e.target.value)} // Example for handling notes
          />
        </NotesContainer>
      </PlannerGrid>
      <Footer>Designed with 💖 for You</Footer>
    </PlannerContainer>
  );
};

export default WeeklyPlanner;

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
  grid-template-columns: repeat(3, 1fr) 1fr; /* Adjusted to include an additional column */
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const DayContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #f3f3f3;

  &:hover {
    transform: scale(1.05);
  }
`;

const SaturdayContainer = styled(DayContainer)`
  grid-column: span 1;
`;

const NotesContainer = styled(DayContainer)`
  grid-column: span 1;
  grid-row: span 3;
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
  color: #4f5d73;
  background-color: #f9f9f9;
  margin-bottom: 12px;
  transition: border-color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
    border-color: #f76b8a;
  }

  &::placeholder {
    color: #d1d1d1;
    font-style: italic;
  }
`;

const NotesHeader = styled.h4`
  font-size: 1.4rem;
  color: #3b3a45;
  font-weight: bold;
  margin-bottom: 15px;
`;

const NotesInput = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #e8c8d8;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #4f5d73;
  background-color: #f9f9f9;
  resize: none;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f76b8a;
  }

  &::placeholder {
    color: #d1d1d1;
    font-style: italic;
  }
`;

const Footer = styled.div`
  margin-top: 30px;
  color: #3b3a45;
  font-size: 1rem;
  font-style: italic;
  text-align: center;
`;
