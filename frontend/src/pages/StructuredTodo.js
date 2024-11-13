import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaCheckCircle, FaClock } from 'react-icons/fa'; // Clean icons from React Icons
import Confetti from 'react-confetti';

const StructuredTodo = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskList, setTaskList] = useState({
    morning: [
      { task: "Wake up", time: "6:00 AM" },
      { task: "Pray", time: "6:30 AM" },
      { task: "Exercise", time: "7:00 AM" },
      { task: "Breakfast", time: "8:00 AM" },
      { task: "Get Ready", time: "8:30 AM" },
    ],
    day: [
      { task: "Go to Work", time: "9:00 AM" },
      { task: "Clock In", time: "9:30 AM" },
      { task: "Make Tea", time: "10:00 AM" },
      { task: "Standup Meeting", time: "10:30 AM" },
      { task: "Work", time: "11:00 AM - 5:00 PM" },
    ],
    evening: [
      { task: "Leave Work", time: "5:30 PM" },
      { task: "Go Home", time: "6:00 PM" },
      { task: "Make Supper", time: "7:00 PM" },
      { task: "Relax and Unwind", time: "8:00 PM" },
      { task: "Sleep", time: "10:00 PM" }
    ]
  });

  const [confettiVisible, setConfettiVisible] = useState(false);

  const handleTaskCompletion = (task, timeOfDay) => {
    setCompletedTasks([...completedTasks, task]);
    setTaskList({
      ...taskList,
      [timeOfDay]: taskList[timeOfDay].filter(item => item.task !== task.task)
    });
    setConfettiVisible(true);

    // Hide confetti after a few seconds
    setTimeout(() => {
      setConfettiVisible(false);
    }, 5000);
  };

  return (
    <PageContainer>
      <PageTitle>Structured To-Do List</PageTitle>

      {/* Confetti on task completion */}
      {confettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <TaskSectionsContainer>
        <TaskSection>
          <SectionTitle>Morning</SectionTitle>
          <TaskList>
            {taskList.morning.map((task, index) => (
              <TaskItem key={index} onClick={() => handleTaskCompletion(task, 'morning')}>
                <IconWrapper>
                  <FaClock />
                </IconWrapper>
                <TaskText>{task.time} - {task.task}</TaskText>
                <CompletionIcon>
                  <FaCheckCircle />
                </CompletionIcon>
              </TaskItem>
            ))}
          </TaskList>
        </TaskSection>

        <TaskSection>
          <SectionTitle>Day</SectionTitle>
          <TaskList>
            {taskList.day.map((task, index) => (
              <TaskItem key={index} onClick={() => handleTaskCompletion(task, 'day')}>
                <IconWrapper>
                  <FaClock />
                </IconWrapper>
                <TaskText>{task.time} - {task.task}</TaskText>
                <CompletionIcon>
                  <FaCheckCircle />
                </CompletionIcon>
              </TaskItem>
            ))}
          </TaskList>
        </TaskSection>

        <TaskSection>
          <SectionTitle>Evening</SectionTitle>
          <TaskList>
            {taskList.evening.map((task, index) => (
              <TaskItem key={index} onClick={() => handleTaskCompletion(task, 'evening')}>
                <IconWrapper>
                  <FaClock />
                </IconWrapper>
                <TaskText>{task.time} - {task.task}</TaskText>
                <CompletionIcon>
                  <FaCheckCircle />
                </CompletionIcon>
              </TaskItem>
            ))}
          </TaskList>
        </TaskSection>
      </TaskSectionsContainer>

      <CompletedTasksTitle>Completed Tasks</CompletedTasksTitle>
      <TrashBin>
        {completedTasks.map((task, index) => (
          <CompletedTaskItem key={index}>
            <TaskText>{task.time} - {task.task}</TaskText>
            <DeleteButton onClick={() => setCompletedTasks(completedTasks.filter((t) => t !== task))}>
              <FaTrashAlt />
            </DeleteButton>
          </CompletedTaskItem>
        ))}
      </TrashBin>
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
  height: 100vh;
  background-color: #fef2f8; /* soft pastel pink background */
  overflow: hidden;
  font-family: 'Georgia', serif;
  box-sizing: border-box;

  /* Transparent Scrollbars */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const PageTitle = styled.h1`
  font-size: 3.2rem;
  color: #d17b9e;
  margin-bottom: 20px;
  font-family: 'Dancing Script', cursive;
`;

const TaskSectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 30px;
  max-width: 1200px;
`;

const TaskSection = styled.div`
  width: 100%;
  max-width: 350px;
  flex-grow: 1;
  background-color: #fbe9e7; /* Soft blush pink */
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #e76f9e;
  margin-bottom: 15px;
  font-family: 'Lora', serif;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  background-color: #f8bbd0; /* Light pastel pink */
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 12px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f4a6b0;
    transform: scale(1.02);
  }
`;

const IconWrapper = styled.div`
  color: #f76c7c;
  font-size: 1.5rem;
  margin-right: 12px;
`;

const CompletionIcon = styled.div`
  color: #8b62a3;
  font-size: 1.5rem;
`;

const TaskText = styled.span`
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  flex-grow: 1;
`;

const CompletedTasksTitle = styled.h2`
  font-size: 2.4rem;
  color: #e76f9e;
  margin-top: 30px;
  font-family: 'Lora', serif;
`;

const TrashBin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const CompletedTaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8bbd0; /* Same pink */
  padding: 12px 20px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #e76f9e;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    color: #d17b9e;
  }
`;
