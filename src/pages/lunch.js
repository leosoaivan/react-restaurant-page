import React from 'react';
import styled from 'styled-components';
import LunchMenu from '../data/lunchmenu';
import PageTitle from '../components/PageTitle';

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px;
`;

const MenuItem = styled.div`
  width: 50%;
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
  padding-right: 48px;
`;

const MenuDescription = styled.div`
  width: 90%;
`;

const MenuPrice = styled.div`
  margin-right: 12px;
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
      <PageTitle>
        Lunch
      </PageTitle>
      {menuDom}
    </Root>
  );
};

export default Lunch;
