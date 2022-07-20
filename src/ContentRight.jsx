import React from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

import visual2 from './assets/visual_02.png';
import image10 from './assets/image_10-cropped.jpg';
import image11 from './assets/image_11-cropped.jpg';
import image12 from './assets/image_12-cropped.jpg';
import image13 from './assets/image_13.jpg';

const slides = [image10, image11, image12, image13];

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 1024px;
`;

const Slider = styled.div`
  margin: 0 -1rem;

  @media only screen and (min-width: 1200px) {
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

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-right: 1.5rem;
`;

const Pages = styled.div``;

const Controls = styled.div`
  display: flex;
`;

const Control = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  /* font-size: 1.5rem; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Control2 = styled(Control)`
  transform: scaleX(-2);
`;

const ArrowForwardIcon = styled(MdArrowForwardIos)`
  color: #fff;
  transform: scale(2);
`;

const ArrowBackwardIcon = styled(ArrowForwardIcon)`
  color: #fff;
  transform: scale(-2);
`;

const Trailers = styled.div`
  /* background: #ccc; */
`;

const Title = styled.h2`
  font-family: var(--font-medium);
  line-height: 90%;
  color: #fff;
  margin-bottom: 1rem;
`;

const Slider2 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 250px;
  overflow: hidden;
  padding-left: 9px;
`;

const Slide2 = styled.div`
  width: 220px;
  height: 150px;
  overflow: hidden;
  border-radius: 10px 0px 30px;

  transform: translate(-9px, -9px);
  img {
    width: 101%;
    height: 101%;
    object-fit: cover;
  }

  &:hover {
    transform: translate(0);
  }
`;

const Slide2Bg = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 10px 0px 30px;
  background: rgba(255, 255, 255, 0.1);
`;

export const ContentRight = () => {
  return (
    <Wrapper>
      <Slider>
        <SliderImage>
          <img src={visual2} alt='slider' />
        </SliderImage>
        <Pagination>
          <Controls>
            <Control>
              <ArrowBackwardIcon />
            </Control>
            <Control>
              <ArrowForwardIcon />
            </Control>
          </Controls>
          <Pages></Pages>
        </Pagination>
      </Slider>
      <Trailers>
        <Title>Trailers</Title>
        <Slider2>
          {slides.map((slide, i) => (
            <Slide2Bg key={i}>
              <Slide2>
                <img src={slide} alt='slide' />
              </Slide2>
            </Slide2Bg>
          ))}
        </Slider2>
      </Trailers>
    </Wrapper>
  );
};
