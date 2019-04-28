import React from 'react';
import styled from 'styled-components';
import Raleway from 'typeface-raleway';

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em
  width: 100%;
`;
  
  const NavBarList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  align-items: center;
  padding: 0;
  width: 80%;
  background-color: rgba(250,250,210,.8)
`;

const ListItem = styled.li`
  display: block;
  padding: 1em;
  font-family: Raleway, sans-serif;
`;


const NavBar = () => {
  return (
    <Root>
      <NavBarList>
        <ListItem>
          Our Story
        </ListItem>
      </NavBarList>
    </Root>
  )
}

export default NavBar;
