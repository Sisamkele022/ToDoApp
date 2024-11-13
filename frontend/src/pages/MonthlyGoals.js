import React from 'react';
import styled from 'styled-components';

const MonthlyGoals = () => {
  return (
    <PageContainer>
      <PageTitle>Monthly Goals</PageTitle>
      <p>This is the Monthly Goals page where you can set and track your goals for the month.</p>
      {/* Add your monthly goals content here */}
    </PageContainer>
  );
};

export default MonthlyGoals;

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
