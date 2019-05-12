import React from 'react';
import styled from 'styled-components';

const Root = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 1.25em;
  font-weight: 400;
  line-height: 2.25em;
  margin: 0 1.5em 0 1.5em;
`;

const Header = () => (
  <Root>
    <HeaderText>
      {'835 North Capital Street, Alexandria, VA 12345'}
    </HeaderText>
    <HeaderText>
      {'(123) 456-7890'}
    </HeaderText>
  </Root>
);

export default Header;
