import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import './App.css';
import { Container, HeroWrapper } from './Common.elements';
import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';
import bgImg from './assets/background.jpg';

function App() {
  return (
    <div className='app'>
      <HeroWrapper bgImg={bgImg}>
        <Container>
          <ContentLeft />
          <ContentRight />
        </Container>
      </HeroWrapper>
      <Container>
        <div className='some-content'>
          <div>Some content</div>
        </div>
      </Container>
    </div>
  );
}

export default App;
