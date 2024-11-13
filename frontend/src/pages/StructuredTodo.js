import React from 'react';
import styled from 'styled-components';

const StructuredTodo = () => {
  const tasks = [
    { time: "6:00 AM", task: "Wake up & hydrate", reminder: "Drink a glass of water" },
    { time: "6:10 AM", task: "Morning prayer", reminder: "Start your day with gratitude" },
    { time: "6:30 AM", task: "Exercise or stretch", reminder: "Boost your energy" },
    { time: "7:00 AM", task: "Shower and get ready", reminder: "" },
    { time: "7:30 AM", task: "Prepare and eat breakfast", reminder: "A balanced meal is key" },
    { time: "8:00 AM", task: "Commute to work", reminder: "Check traffic updates" },
    { time: "9:00 AM", task: "Clock in at work", reminder: "Start your workday" },
    { time: "9:15 AM", task: "Make a morning tea or coffee", reminder: "Grab a quick refreshment" },
    { time: "9:30 AM", task: "Attend morning stand-up meeting", reminder: "Prepare updates" },
    { time: "10:00 AM", task: "Respond to important emails", reminder: "Prioritize urgent ones" },
    { time: "10:30 AM", task: "Focus on morning work tasks", reminder: "" },
    { time: "12:00 PM", task: "Take a short break", reminder: "Stretch and hydrate" },
    { time: "12:15 PM", task: "Continue with project work", reminder: "Stay focused" },
    { time: "1:00 PM", task: "Lunch break", reminder: "Enjoy your meal" },
    { time: "2:00 PM", task: "Afternoon tasks and meetings", reminder: "Be punctual" },
    { time: "4:00 PM", task: "Prepare daily report or updates", reminder: "Summarize achievements" },
    { time: "5:00 PM", task: "Wrap up and prepare for next day", reminder: "Organize tomorrow’s tasks" },
    { time: "5:15 PM", task: "Clock out and commute home", reminder: "Drive safely" },
    { time: "6:00 PM", task: "Prepare and eat dinner", reminder: "A nutritious meal" },
    { time: "7:00 PM", task: "Evening relaxation (e.g., read or watch TV)", reminder: "Unwind and enjoy" },
    { time: "8:30 PM", task: "Evening skincare or self-care routine", reminder: "Take time for yourself" },
    { time: "9:00 PM", task: "Plan tasks for the next day", reminder: "Write down your goals" },
    { time: "10:00 PM", task: "Go to bed and get a restful sleep", reminder: "Good night!" },
  ];

  return (
    <PageContainer>
      <PageTitle>Structured To-Do</PageTitle>
      <TaskList>
        {tasks.map((item, index) => (
          <TaskItem key={index}>
            <TimeSlot>{item.time}</TimeSlot>
            <TaskDetails>
              <TaskName>{item.task}</TaskName>
              {item.reminder && <Reminder>{item.reminder}</Reminder>}
            </TaskDetails>
          </TaskItem>
        ))}
      </TaskList>
    </PageContainer>
  );
};

export default StructuredTodo;

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  background-color: #fef9ff;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #7f56d9;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: flex-start;
  background: #f1f1f1;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const TimeSlot = styled.div`
  font-size: 1rem;
  color: #7f56d9;
  font-weight: bold;
  min-width: 70px;
  text-align: right;
  margin-right: 15px;
  font-family: 'Poppins', sans-serif;
`;

const TaskDetails = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const TaskName = styled.div`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  font-family: 'Lora', serif;
`;

const Reminder = styled.div`
  font-size: 1rem;
  color: #9c3d68;
  font-family: 'Poppins', sans-serif;
  margin-top: 5px;
  font-style: italic;
`;
