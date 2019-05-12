import React from 'react';
import styled from 'styled-components';
import LunchMenu from '../data/lunchmenu';

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  width: 47.5%;
  margin-bottom: 24px;
`;

const ItemTitle = styled.h2`
  width: 100%;
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
`;

const Lunch = () => {
  const menuDom = LunchMenu.map((menu, index) => {
    const { title, description, price } = menu;
    const menuItemKey = `menu-item-${index}`;

    return (
      <MenuItem key={menuItemKey}>
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
    );
  });

  return (
    <Root>
      {menuDom}
    </Root>
  );
};

export default Lunch;
