import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import './App.css';
import { Container, Background } from './Common.elements';
import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';
import bgImg from './assets/image_19.png';

function App() {
  return (
    <div className='app'>
      <Background img={bgImg} />
      <Container>
        <ContentLeft />
        <ContentRight />
      </Container>
      <div className='some-content'>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default App;
