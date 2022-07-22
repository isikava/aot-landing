import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import './App.css';
import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';

function App() {
  return (
    <div className='app'>
      <div className='bg' />
      <div className='container'>
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
