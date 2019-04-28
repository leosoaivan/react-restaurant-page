import React from 'react';
import styled from 'styled-components';
import Shrooms from './images/kingoystershrooms.jpeg';

const Root = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Shrooms});
`;

const App = () => {
  return (
    <Root />
  );
}

export default App;
