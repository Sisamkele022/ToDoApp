import React, { useState } from 'react';
import styled from 'styled-components';

const ShoppingList = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  // Function to handle adding an item to the list
  const handleAddItem = () => {
    if (item) {
      setItems([...items, item]);
      setItem('');
    }
  };

  return (
    <PageContainer>
      <Header>
        <h1>🛍️ Your Shopping List</h1>
        <p>Make your shopping experience fun and easy!</p>
      </Header>

      <InputContainer>
        <Input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a new item..."
        />
        <AddButton onClick={handleAddItem}>+ Add Item</AddButton>
      </InputContainer>

      <ListContainer>
        {items.length === 0 ? (
          <EmptyMessage>No items added yet! 🛒</EmptyMessage>
        ) : (
          <ul>
            {items.map((item, index) => (
              <ListItem key={index}>
                <span>{item}</span>
              </ListItem>
            ))}
          </ul>
        )}
      </ListContainer>
    </PageContainer>
  );
};

export default ShoppingList;

// Styled Components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('https://source.unsplash.com/1600x900/?grocery,shop'); 
  background-size: cover;
  background-position: center;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #fff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #ff4b5c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 30px;
  border: none;
  outline: none;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #ff4b5c;
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

const AddButton = styled.button`
  padding: 15px 25px;
  font-size: 1.1rem;
  background-color: #ff4b5c;
  color: white;
  border: none;
  border-radius: 30px;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3750;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const ListItem = styled.li`
  padding: 15px;
  font-size: 1.4rem;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff4b5c;
    color: white;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const EmptyMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #ff4b5c;
  font-style: italic;
  margin-top: 20px;
`;
