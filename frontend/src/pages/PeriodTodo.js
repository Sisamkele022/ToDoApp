import React from 'react';
import styled from 'styled-components';

const PeriodTodo = () => {
  return (
    <PageContainer>
      <PageTitle>Period To-Do</PageTitle>
      <p>This is the Period To-Do page where you can organize tasks by period.</p>
      {/* Add your period-based tasks list or other content here */}
    </PageContainer>
  );
};

export default PeriodTodo;

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
