import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import Home from '../../pages/home';
import Lunch from '../../pages/lunch';

const Root = styled.div`
  box-sizing: border-box;
  margin-top: 24px;
  background-color: rgba(255, 255, 240, 0.90);
  width: 80%;
  padding: 24px;
`;

const Content = () => {
  return (
    <Root>
      <Route exact path="/" component={Home}/>
      <Route path="/lunch/" component={Lunch}/>
    </Root>
  )
}

export default Content;
