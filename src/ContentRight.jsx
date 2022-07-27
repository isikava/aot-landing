import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Gallery } from './Gallery';
import { Carousel } from './Carousel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;
  max-width: 895px;
  height: 100vh;
  padding-bottom: 3rem;

  @media only screen and (min-width: 800px) {
    height: var(--height-hero);
    justify-content: space-between;
  }
`;

const Trailers = styled.div`
  h2 {
    font-family: var(--ff-medium);
    font-size: 1.5rem;
    line-height: 90%;
    color: var(--cr-text);
    margin: 1rem 0;
  }
`;

export const ContentRight = () => {
  return (
    <Wrapper>
      <Gallery />
      <Trailers>
        <h2>Trailers</h2>
        <Carousel />
      </Trailers>
    </Wrapper>
  );
};
