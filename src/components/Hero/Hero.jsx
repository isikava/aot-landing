import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';

import bgImg from '../../data/background.jpg';
import { ReactComponent as Logo } from '../../data/logo.svg';
import { links, slides, carousel, description } from '../../data/data';
import {
  WatchBtn,
  Slider,
  Carousel,
  Container,
  YoutubeEmbed,
  Modal,
} from '../../components';
import {
  HeroWrapper,
  LeftSide,
  RightSide,
  NavBar,
  Menu,
  Content,
  Title,
  Description,
  Links,
  Trailers,
} from './Hero.styles';

export const Hero = ({ toggleSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const [embedId, setEmbedId] = useState('');

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const launchModal = (embedId) => {
    if (!embedId) return;
    setEmbedId(embedId);
    handleShow();
  };

  return (
    <HeroWrapper id='home' bgImg={bgImg}>
      <Modal showModal={showModal} handleClose={handleClose}>
        <YoutubeEmbed embedId={embedId} />
      </Modal>
      <Container>
        <LeftSide>
          <NavBar
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Menu onClick={toggleSidebar}>
              <RiMenu2Fill size={'2em'} color={'#fff'} />
            </Menu>
            <a href='#home' alt='Logo'>
              <Logo />
            </a>
          </NavBar>

          <Content
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Title>
              The
              <span>Final</span>
              <span>Season</span>
            </Title>

            <WatchBtn onClick={() => launchModal('SlNpRThS9t8')} />

            <Description dangerouslySetInnerHTML={{ __html: description }} />

            <Links>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} rel='noopener noreferrer'>
                    {link.name || link}
                  </a>
                </li>
              ))}
            </Links>
          </Content>
        </LeftSide>

        <RightSide
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Slider images={slides} />
          <Trailers>
            <h2>Trailers</h2>
            <Carousel images={carousel} launchModal={launchModal} />
          </Trailers>
        </RightSide>
      </Container>
    </HeroWrapper>
  );
};
