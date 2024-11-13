import React from 'react';
import styled from 'styled-components';

const WorkoutRoutine = () => {
  return (
    <PageContainer>
      <PageTitle>Workout Routine</PageTitle>
      <p>This is the Workout Routine page where you can plan your fitness workouts.</p>
      {/* Add your workout routine content here */}
    </PageContainer>
  );
};

export default WorkoutRoutine;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #7f56d9;
  margin-bottom: 20px;
`;
