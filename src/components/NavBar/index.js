import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import styled from 'styled-components';
import Raleway from 'typeface-raleway';
import Content from '../Content';

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
  padding: 1em 2em;
  font-family: Raleway, sans-serif;
  font-weight: 700;
`;


const NavBar = () => {
  return (
    <Root>
      <HashRouter>
        <NavBarList>
          <ListItem>
            <NavLink to="/">
            	HOME
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/lunch">
              LUNCH MENU
            </NavLink>
          </ListItem>
          <ListItem>
            DINNER MENU
          </ListItem>
          <ListItem>
            DESSERTS
          </ListItem>
          <ListItem>
            CONTACT US
          </ListItem>
          <ListItem>
            RESERVATIONS
          </ListItem>
        </NavBarList>
        <Content />
      </HashRouter>
    </Root>
  )
}

export default NavBar;
