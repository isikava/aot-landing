import React from 'react';
import { AnimatePresence, useCycle } from 'framer-motion';
import { Hero, Sidebar } from './components';

function App() {
  const [showSidebar, toggleSidebar] = useCycle(false, true);

  return (
    <>
      <Sidebar show={showSidebar} toggle={toggleSidebar} />
      <Hero toggleSidebar={toggleSidebar} />
      <div>123</div>
    </>
  );
}

export default App;
