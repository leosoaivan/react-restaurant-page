import React from 'react';
import styled from 'styled-components';
import Shrooms from './images/kingoystershrooms.jpeg';
import Header from './components/Header';
import NavBar from './components/NavBar';

const Root = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Shrooms});
`;

const App = () => (
  <Root>
    <Header />
    <NavBar />
  </Root>
);

export default App;
