import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.h2`
  display: block;
  font-family: Sail, cursive;
  font-size: 3em;
  width: 100%;
  text-align: center;
  margin-top: 0;
`;

const PageTitle = ({ children }) => (
  <Root>
    {children}
  </Root>
);

PageTitle.propTypes = {
  children: Proptypes.oneOf([Proptypes.node, Proptypes.element]),
};

PageTitle.defaultProps = {
  children: [],
};

export default PageTitle;
