import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useDrag, useDrop } from 'react-dnd';

const initialSuggestedTasks = [
  'Wake up & hydrate',
  'Morning meditation',
  'Quick workout',
  'Get ready for the day',
  'Prepare daily report',
  'Team meeting at 10 AM',
  'Respond to client emails',
  'Review project progress',
  'Reflect on the day',
  'Plan for tomorrow',
  'Evening skincare',
  'Unwind with a book',
];

const TaskManager = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [suggestedTasks, setSuggestedTasks] = useState(initialSuggestedTasks);
  const [customTask, setCustomTask] = useState('');

  const handleAddTask = (task) => {
    setDailyTasks([...dailyTasks, { text: task, completed: false }]);
    setSuggestedTasks(suggestedTasks.filter((t) => t !== task));
  };

  const handleCompleteTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
    setDailyTasks(dailyTasks.filter((t) => t.text !== task.text));
  };

  const handleDeleteTask = (task, fromDaily) => {
    if (fromDaily) {
      setSuggestedTasks([...suggestedTasks, task.text]); // Returns the task back to Suggested Tasks
      setDailyTasks(dailyTasks.filter((t) => t.text !== task.text));
    } else {
      setDailyTasks([...dailyTasks, { text: task.text, completed: false }]);
      setCompletedTasks(completedTasks.filter((t) => t.text !== task.text));
    }
  };

  const handleAddCustomTask = () => {
    if (customTask.trim() !== '') {
      setDailyTasks([...dailyTasks, { text: customTask, completed: false }]);
      setCustomTask('');
    }
  };

  const moveTask = (draggedIndex, hoveredIndex) => {
    const updatedTasks = [...dailyTasks];
    const draggedTask = updatedTasks[draggedIndex];
    updatedTasks.splice(draggedIndex, 1);
    updatedTasks.splice(hoveredIndex, 0, draggedTask);
    setDailyTasks(updatedTasks);
  };

  return (
    <PageWrapper>
      <PageContainer>
        <Column>
          <SectionTitle>Your Daily Tasks</SectionTitle>
          <TaskList>
            {dailyTasks.map((task, index) => (
              <DraggableTask
                key={index}
                index={index}
                task={task}
                moveTask={moveTask}
                handleCompleteTask={handleCompleteTask}
                handleDeleteTask={handleDeleteTask}
                isDaily={true}
              />
            ))}
          </TaskList>
          <InputWrapper>
            <TaskInput
              type="text"
              value={customTask}
              onChange={(e) => setCustomTask(e.target.value)}
              placeholder="Add your own task"
            />
            <AddButton onClick={handleAddCustomTask}>Add Task</AddButton>
          </InputWrapper>
        </Column>
        <Column>
          <SectionTitle>Completed Tasks</SectionTitle>
          <TaskList>
            {completedTasks.map((task, index) => (
              <TaskItem key={index}>
                <TaskText>{task.text}</TaskText>
                <TaskActions>
                  <DeleteButton onClick={() => handleDeleteTask(task, false)}>
                    <FaTrashAlt />
                  </DeleteButton>
                </TaskActions>
              </TaskItem>
            ))}
          </TaskList>
        </Column>
        <Column>
          <SectionTitle>Suggested Tasks</SectionTitle>
          <HorizontalList>
            {suggestedTasks.map((task, index) => (
              <TaskItem key={index} onClick={() => handleAddTask(task)}>
                <TaskText>{task}</TaskText>
              </TaskItem>
            ))}
          </HorizontalList>
        </Column>
      </PageContainer>
    </PageWrapper>
  );
};

const DraggableTask = ({ task, index, moveTask, handleCompleteTask, handleDeleteTask, isDaily }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <TaskItem ref={(node) => drag(drop(node))}>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCompleteTask(task)}
      />
      <TaskText>{task.text}</TaskText>
      <TaskActions>
        <DeleteButton onClick={() => handleDeleteTask(task, isDaily)}>
          <FaTrashAlt />
        </DeleteButton>
      </TaskActions>
    </TaskItem>
  );
};

// Styled Components

const PageWrapper = styled.div`
  height: 100vh;
  background-color: #ffe6f2; /* Pastel pink background */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const PageContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 80%;
  max-width: 1200px;
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Column = styled.div`
  width: 33%; /* Equal width for all columns */
  background: #f7c8d8; /* Light pink background for each column */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 15px;
  color: #9c3d68; /* Darker pink */
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HorizontalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #e1e1e1;
  }
`;

const TaskText = styled.span`
  font-size: 1.2rem;
  font-family: 'Lora', serif;
  color: #333;
  flex-grow: 1;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #f44336;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #d32f2f;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const TaskInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #7f56d9;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #6a44b9;
  }
`;

export default TaskManager;
