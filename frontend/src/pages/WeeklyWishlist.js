import React from 'react';
import styled from 'styled-components';

const WeeklyWishlist = () => {
  return (
    <WishlistContainer>
      <Title>Weekly Wishlist</Title>
      <Wishlist>
        <WishlistItem>Visit a new café</WishlistItem>
        <WishlistItem>Try a new hobby</WishlistItem>
        <WishlistItem>Organize your closet</WishlistItem>
        <WishlistItem>Have a digital detox day</WishlistItem>
      </Wishlist>
    </WishlistContainer>
  );
};

export default WeeklyWishlist;

const WishlistContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.pastelPink};
  height: 100vh;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.accentColor};
  margin-bottom: 20px;
`;

const Wishlist = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const WishlistItem = styled.li`
  background-color: ${(props) => props.theme.colors.lightGray};
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.darkText};
`;
