import React from 'react';
import styled from 'styled-components';

const ShoppingList = () => {
  return (
    <PageContainer>
      <PageTitle>Shopping List</PageTitle>
      <p>This is the Shopping List page where you can manage your shopping items.</p>
      {/* Add your shopping list content here */}
    </PageContainer>
  );
};

export default ShoppingList;

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
