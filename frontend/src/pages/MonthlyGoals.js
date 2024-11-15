import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const MonthlyGoals = () => {
  const [date, setDate] = useState(new Date());
  const [goals, setGoals] = useState({});
  const [goalInput, setGoalInput] = useState('');

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

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe6f0, #ffccff);
  min-height: 100vh;
  color: #4a154b;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #ff85b3;
  text-shadow: 0 0 10px #ff85b3, 0 0 20px #ff6396;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a154b;
  text-shadow: 0 0 10px #fff;
`;

const CalendarContainer = styled.div`
  margin: 20px 0;
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  background: white;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  .react-calendar__tile--active {
    background: linear-gradient(135deg, #ff85b3, #ffb5c5);
    color: white;
    border-radius: 50%;
  }

  .react-calendar__tile.highlight {
    background: #ffe6f0;
    border-radius: 50%;
    box-shadow: 0 0 10px #ff85b3;
  }
`;

const SelectedDate = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px 0;
  color: #ff85b3;
`;

const GoalsSection = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const GoalsHeader = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #ff6396;
`;

const GoalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const GoalItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffe6f0, #ffccff);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #4a154b;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const NoGoals = styled.p`
  color: #888;
  text-align: center;
`;

const GoalInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const GoalInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #ffe6f0;
  color: #4a154b;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;

const AddGoalButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff6396, #ff85b3);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #ff85b3, #ff6396);
  }
`;

const DeleteButton = styled.button`
  background: #ffccff;
  color: #4a154b;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ff85b3;
    color: white;
  }
`;
