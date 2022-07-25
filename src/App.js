import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import './App.css';
import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';

const Content = styled.div`
  flex: 1;

  background: blue;
  height: 100px;
  min-width: 0;

  /* max-width: 700px; */
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Overflow = styled.div`
  width: 1800px;
  background: lightpink;
`;

function App() {
  return (
    <div className='app'>
      <div className='bg' />
      <div className='container'>
        {/* <div className='wrapper'>
          <div className='left'>left</div>
          <div className='right'>
            right
            <Content>
              <Overflow>overflow</Overflow>
            </Content>
          </div>
        </div> */}
        <div className='wrapper'>
          <ContentLeft />
          <ContentRight />
        </div>
      </div>
      <div className='some-content'>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default App;
