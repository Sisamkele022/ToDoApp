import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ShoppingList = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  // Function to handle adding an item to the list
  const handleAddItem = () => {
    if (item) {
      setItems([...items, { name: item, bought: false }]);
      setItem('');
    }
  };

  // Function to toggle "bought" status
  const toggleBought = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  // Function to delete an item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <PageContainer>
      <Header>
        <h1>🛍️ Your Ultimate Shopping List</h1>
        <p>Stay organized and stress-free while shopping!</p>
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
              <ListItem key={index} bought={item.bought}>
                <span onClick={() => toggleBought(index)}>
                  {item.bought ? '✅' : '🛒'} {item.name}
                </span>
                <DeleteButton onClick={() => deleteItem(index)}>🗑️</DeleteButton>
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
  background: linear-gradient(to bottom, #ffefba, #ffffff);
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #444;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #ff4b5c;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #555;
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
  border: 2px solid #ddd;
  outline: none;
  width: 300px;
  background-color: #f9f9f9;
  color: #333;
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

  &:hover {
    background-color: #ff3750;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  padding: 15px;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bought }) => (bought ? '#d4edda' : '#f8d7da')};
  border-radius: 12px;
  margin-bottom: 10px;

  span {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #ff4b5c;
  }
`;

const EmptyMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #555;
  font-style: italic;
  margin-top: 20px;
`;
