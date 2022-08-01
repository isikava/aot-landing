import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Slider } from './Slider';
import { Carousel } from './Carousel';
import { slides, carousel } from './data';
console.log(slides);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  min-width: 0; // hide overflow
  max-width: 895px;
  padding-bottom: 3rem;

  @media only screen and (min-width: 1200px) {
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
      <Slider images={slides} />
      <Trailers>
        <h2>Trailers</h2>
        <Carousel images={carousel} />
      </Trailers>
    </Wrapper>
  );
};
