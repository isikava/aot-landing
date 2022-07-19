import React from 'react';
import styled from 'styled-components';
import visual2 from './assets/visual_02.png';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 1024px;
`;

const Slider = styled.div`
  margin: 0 -1rem;

  @media only screen and (min-width: 800px) {
    margin: 0;
  }
`;

const SliderImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Trailers = styled.div`
  background: blue;
`;

export const ContentRight = () => {
  return (
    <Wrapper>
      <Slider>
        <SliderImage>
          <img src={visual2} alt='slider' />
        </SliderImage>
      </Slider>
      <Trailers>Trailers</Trailers>
    </Wrapper>
  );
};
