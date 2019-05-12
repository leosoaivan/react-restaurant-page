import React from 'react';
import styled from 'styled-components';
import LunchMenu from '../data/lunchmenu';

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuItem = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const ItemTitle = styled.h2`
  width: 100%;
  flex-shrink: 0;
  font-family: Roboto, sans-serif;
`;

const ItemInformation = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Josefin Slab, serif;
  font-size: 1.25em;
  font-weight: 400;
`;

const MenuDescription = styled.div`
  width: 85%;
`;

const MenuPrice = styled.div`
  width: 10%;
`;

const Lunch = () => {
  const menuDom = LunchMenu.map((menu) => {
    const { title, description, price } = menu;

    return (
      <MenuItem>
        <ItemTitle>
          {title}
        </ItemTitle>
        <ItemInformation>
          <MenuDescription>
            {description}
          </MenuDescription>
          <MenuPrice>
            {price}
          </MenuPrice>
        </ItemInformation>
      </MenuItem>
    )
  });

  return (
    <Root>
      {menuDom}
    </Root>
  )
}

export default Lunch;
