import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import Home from '../../pages/home';
import Lunch from '../../pages/lunch';

const Root = styled.div`
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
