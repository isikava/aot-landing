import React from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';

import visual2 from './assets/visual_02.png';

const GalleryContainer = styled.div``;

const GalleryImage = styled.div`
  width: 100%;

  /* margin: 0 -1rem; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* @media only screen and (min-width: 1200px) {
    margin: 0;
  } */
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Pages = styled.div``;

const Controls = styled.div`
  display: flex;
  /* gap: 10px; */

  & > * + * {
    margin-left: 10px;
  }
`;

const Control = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowForwardIcon = styled(MdArrowForwardIos)`
  color: #fff;
  font-size: 1.5rem;
`;

const ArrowBackwardIcon = styled(ArrowForwardIcon)`
  transform: scale(-1);
`;

export const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryImage>
        <img src={visual2} alt='Gallery' />
      </GalleryImage>
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
    </GalleryContainer>
  );
};
