import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';

import bgImg from '../../assets/background.jpg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { links, slides, carousel } from '../../data';
import { WatchBtn, Slider, Carousel, Container } from '../../components';
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

export const Hero = () => {
  return (
    <HeroWrapper id='home' bgImg={bgImg}>
      <Container>
        <LeftSide>
          <NavBar>
            <Menu>
              <RiMenu2Fill size={'2em'} color={'#fff'} />
            </Menu>
            <a href='#home' alt='Logo'>
              <Logo />
            </a>
          </NavBar>

          <Content>
            <Title>
              The
              <span>Final</span>
              <span>Season</span>
            </Title>

            <WatchBtn />

            <Description>
              The fourth and final season of the Attack on Titan anime
              television series, titled Attack on Titan: The Final Season, is{' '}
              <span>produced by MAPPA</span>, chief directed by Jun Shishido,
              and directed by Yūichirō Hayashi, replacing Tetsurō Araki and
              Masashi Koizuka respectively. Scriptwriter{' '}
              <span>Hiroshi Seko</span> took over the series composition from{' '}
              <span>Yasuko Kobayashi</span>, and Tomohiro Kishi replaced Kyōji
              Asano as character designer due to the series switching production
              studios.
            </Description>

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

        <RightSide>
          <Slider images={slides} />
          <Trailers>
            <h2>Trailers</h2>
            <Carousel images={carousel} />
          </Trailers>
        </RightSide>
      </Container>
    </HeroWrapper>
  );
};
