import './App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';

function App() {
  return (
    <div className='app'>
      <div className='bg' />
      <div className='container wrapper'>
        <ContentLeft />
        <ContentRight />
      </div>
      <div className='some-content'>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default App;
