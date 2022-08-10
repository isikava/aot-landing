import React from 'react';
import { useCycle } from 'framer-motion';
import { Hero, Sidebar } from './components';

function App() {
  const [showSidebar, toggleSidebar] = useCycle(false, true);

  return (
    <>
      <Sidebar show={showSidebar} toggle={toggleSidebar} />
      <Hero toggleSidebar={toggleSidebar} />
    </>
  );
}

export default App;
