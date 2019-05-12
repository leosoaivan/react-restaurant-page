import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const HomeTitle = styled.h1`
  display: block;
  font-family: Sail, cursive;
  font-size: 4em;
  width: 100%;
  text-align: center;
`;

const HomeText = styled.div`
  font-family: Josefin Slab, serif;
  font-size: 1.25em;
  width: 80%;
  margin-bottom: 24px;
`;

const Home = () => {
  const homeText = `
    Since opening our doors in 2019, we at Mueang Thai have taken pleasure in providing our patrons with a place of camaraderie, culture and peace.
    Steeped in traditional Thai cooking techniques and bold flavors, our cooking depends on unique and high-quality ingredients. These ingredients are either self-grown or locally-sourced by our partner farms, fisheries, and
    butchers. We hope our vibrant flavors will transport you and leave you feeling like a part of our family.
  `;
  return (
    <Root>
      <HomeTitle>
        Mueang Thai
      </HomeTitle>
      <HomeText>
        {homeText}
      </HomeText>
    </Root>
  );
};

export default Home;
