import React from 'react';
import styled from 'styled-components';

const RelaxedTodo = () => {
  return (
    <PageContainer>
      <PageTitle>Relaxed To-Do</PageTitle>
      <p>This is the Relaxed To-Do page where you can create a more relaxed list of tasks.</p>
      {/* Add your relaxed tasks list or other content here */}
    </PageContainer>
  );
};

export default RelaxedTodo;

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
