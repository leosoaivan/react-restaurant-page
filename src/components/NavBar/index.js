import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import styled from 'styled-components';
import Raleway from 'typeface-raleway';
import Content from '../Content';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: rgba(255, 215, 0, .75);
`;

const Link = styled(NavLink)`
  display: block;
  padding: 1em 2em;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgba(255, 215, 0, 1);
  }
;`

const NavBar = () => {
  return (
    <Root>
      <HashRouter hashType="noslash">
        <NavBarList>
          <Link to="/">
            HOME
          </Link>
          <Link to="/lunch">
            LUNCH MENU
          </Link>
          <Link to="/">
            DINNER MENU
          </Link>
          <Link to="/">
            DESSERTS
          </Link>
          <Link to="/">
            CONTACT US
          </Link>
          <Link to="/">
            RESERVATIONS
          </Link>
        </NavBarList>
        <Content />
      </HashRouter>
    </Root>
  )
}

export default NavBar;
