import './App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { RiMenu2Fill } from 'react-icons/ri';

import { ContentLeft } from './ContentLeft';
import { ContentRight } from './ContentRight';

function App() {
  return (
    <div className='app'>
      <div className='bg' />
      <div className='container wrapper'>
        <div className='menu-wrapper'>
          <RiMenu2Fill size={'2em'} color={'#fff'} />
        </div>
        <ContentLeft />
        <ContentRight />
      </div>{' '}
      <div className='some-content'>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default App;
