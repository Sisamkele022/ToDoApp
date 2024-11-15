import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

const initialSuggestedTasks = [
  'Meditate for 10 minutes',
  'Do a short yoga session',
  'Listen to calming music or nature sounds',
  'Take a warm bath with essential oils',
  'Read a chapter of a book you love',
  'Write in a gratitude journal',
  'Try deep breathing exercises',
  'Watch a feel-good movie or series',
  'Light a scented candle and sit in silence',
  'Do a simple craft or DIY project',
  'Take a walk in a nearby park',
  'Sit and enjoy nature at a local garden',
  'Watch the sunrise or sunset',
  'Go for a light jog or stretch outdoors',
  'Lie on the grass and look at the sky',
  'Visit a beach or lakeside for fresh air',
  'Plant or care for flowers or a small garden',
  'Go stargazing on a clear night',
  'Ride a bike around your neighborhood',
  'Feed birds or enjoy their sounds in a quiet area',
  'Draw, paint, or color in an adult coloring book',
  'Play an instrument or learn a simple tune',
  'Bake or cook something new and simple',
  'Write a poem or short story',
  'Take photographs of things that inspire you',
  'Call or video chat with a close friend',
  'Spend quality time with family or pets',
  'Play a board game or card game with friends',
  'Join a local hobby or interest group',
  'Volunteer for a small community activity',
  'Practice guided visualization (e.g., imagine a peaceful beach)',
  'Try progressive muscle relaxation techniques',
  'Organize or declutter a small space for peace of mind',
  'Do a puzzle or solve a Sudoku for focus',
  'Listen to an inspiring podcast or audiobook',
];

const RelaxedTodo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = localStorage.getItem('completedTasks');
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });
  const [suggestedTasks, setSuggestedTasks] = useState(initialSuggestedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
    setSuggestedTasks(suggestedTasks.filter((t) => t !== task));
  };

  const handleCompleteTask = (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    setTasks(tasks.map((t) => (t.text === task.text ? updatedTask : t)));
    if (!task.completed) {
      const completionDate = new Date().toISOString();
      setCompletedTasks([
        ...completedTasks,
        { text: task.text, completionDate },
      ]);
    } else {
      setCompletedTasks(
        completedTasks.filter((t) => t.text !== task.text)
      );
    }
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.text !== task.text));
    setCompletedTasks(
      completedTasks.filter((t) => t.text !== task.text)
    );
  };

  return (
    <PageWrapper>
      <PageContainer>
        <Column>
          <SectionTitle>Your Relaxed Tasks</SectionTitle>
          <TaskList>
            {tasks.map((task, index) => (
              <TaskItem key={index}>
                <Checkbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task)}
                />
                <TaskText completed={task.completed}>{task.text}</TaskText>
                <DeleteButton onClick={() => handleDeleteTask(task)}>
                  <FaTrashAlt />
                </DeleteButton>
              </TaskItem>
            ))}
          </TaskList>
        </Column>
        <Column>
          <SectionTitle>Suggested Relaxation Activities</SectionTitle>
          <ScrollableGrid>
            {suggestedTasks.map((task, index) => (
              <TaskGridItem key={index} onClick={() => handleAddTask(task)}>
                {task}
              </TaskGridItem>
            ))}
          </ScrollableGrid>
        </Column>
        <Column>
          <SectionTitle>Completed Tasks</SectionTitle>
          <TaskList>
            {completedTasks
              .sort(
                (a, b) =>
                  new Date(b.completionDate) - new Date(a.completionDate)
              )
              .map((task, index) => (
                <CompletedTaskItem key={index}>
                  {task.text} -{' '}
                  <CompletionDate>
                    {new Date(task.completionDate).toLocaleDateString()} at{' '}
                    {new Date(task.completionDate).toLocaleTimeString()}
                  </CompletionDate>
                </CompletedTaskItem>
              ))}
          </TaskList>
        </Column>
      </PageContainer>
    </PageWrapper>
  );
};

export default RelaxedTodo;

// Styled Components
const PageWrapper = styled.div`
  height: 100vh;
  background-color: #ffe6f2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
`;

const PageContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 90%;
  max-width: 1200px;
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Column = styled.div`
  flex: 1;
  background: #f7c8d8;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #9c3d68;
  margin-bottom: 15px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CompletedTaskItem = styled.li`
  padding: 10px 15px;
  margin-bottom: 10px;
  background: #e1f7d5;
  border-radius: 8px;
`;

const CompletionDate = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const ScrollableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
`;

const TaskGridItem = styled.div`
  background: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #e1e1e1;
  }
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #f44336;
  &:hover {
    color: #d32f2f;
  }
`;
