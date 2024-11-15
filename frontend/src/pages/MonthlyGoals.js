import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation

const MonthlyGoals = () => {
  const [date, setDate] = useState(new Date());
  const [goals, setGoals] = useState({});
  const [goalInput, setGoalInput] = useState('');
  const navigate = useNavigate(); // Initialize navigation hook

  useEffect(() => {
    const storedGoals = localStorage.getItem('monthlyGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('monthlyGoals', JSON.stringify(goals));
  }, [goals]);

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddGoal = () => {
    if (goalInput.trim() === '') return;
    const dateKey = date.toDateString();
    setGoals((prevGoals) => ({
      ...prevGoals,
      [dateKey]: [...(prevGoals[dateKey] || []), goalInput],
    }));
    setGoalInput('');
  };

  const handleDeleteGoal = (dateKey, goalIndex) => {
    setGoals((prevGoals) => {
      const updatedGoals = { ...prevGoals };
      updatedGoals[dateKey].splice(goalIndex, 1);
      if (updatedGoals[dateKey].length === 0) delete updatedGoals[dateKey];
      return updatedGoals;
    });
  };

  const renderGoals = (dateKey) => {
    return goals[dateKey]?.map((goal, index) => (
      <GoalItem key={index}>
        <span>{goal}</span>
        <DeleteButton onClick={() => handleDeleteGoal(dateKey, index)}>Remove</DeleteButton>
      </GoalItem>
    )) || <NoGoals>No goals yet for this day.</NoGoals>;
  };

  const highlightDays = ({ date }) => {
    const dateKey = date.toDateString();
    return goals[dateKey] ? 'highlight' : null;
  };

  return (
    <PageContainer>
      <Header>
        <PageTitle>🌸 Monthly Goals 🌸</PageTitle>
        <Subtitle>Empower your month with purpose and beauty</Subtitle>
      </Header>
      <BackButton onClick={() => navigate('/')}>🏠 Back to Home</BackButton> {/* Add navigation button */}
      <CalendarContainer>
        <StyledCalendar
          onChange={onDateChange}
          value={date}
          tileClassName={highlightDays}
        />
      </CalendarContainer>
      <SelectedDate>Selected Date: {date.toDateString()}</SelectedDate>
      <GoalsSection>
        <GoalsHeader>Goals for {date.toDateString()}</GoalsHeader>
        <GoalList>{renderGoals(date.toDateString())}</GoalList>
        <GoalInputContainer>
          <GoalInput
            type="text"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            placeholder="Write your goal here..."
          />
          <AddGoalButton onClick={handleAddGoal}>+ Add Goal</AddGoalButton>
        </GoalInputContainer>
      </GoalsSection>
    </PageContainer>
  );
};

export default MonthlyGoals;

// Styled Components (Same as before but add styles for the back button)
const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff85b3, #ff6396);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    background: linear-gradient(135deg, #ff6396, #ff85b3);
  }
`;
