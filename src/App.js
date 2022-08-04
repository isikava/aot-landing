import React, { useState } from 'react';
import { Hero } from './components';
import { Modal } from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShow) => !prevShow);
  };

  console.log(showModal);

  return (
    <div className='app'>
      <div>
        123
        <button onClick={toggleModal}>show</button>
      </div>
      <Modal showModal={showModal} handleClose={() => setShowModal(false)} />
      <Hero />
      {/* <iframe
        width='800'
        height='500'
        src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe> */}
    </div>
  );
}

export default App;
