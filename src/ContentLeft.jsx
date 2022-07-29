import React from 'react';
import styled from 'styled-components';
import { RiMenu2Fill } from 'react-icons/ri';

import { WatchBtn } from './WatchBtn';
import { ReactComponent as Logo } from './assets/logo.svg';

const links = ['facebook', 'twitter', 'instagram', 'youtube'];

const Wrapper = styled.div`
  flex: 1 1 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;

  @media (min-width: 800px) {
    flex: 1;
    padding-right: 1rem;
  }

  @media (min-width: 1200px) {
    padding-left: 8.4rem;
    padding-right: 92px;
  }
`;

const NavBar = styled.div`
  display: flex;
  position: relative;
  margin: 3rem 0;
  padding-left: 4rem;

  a {
    svg {
      width: 100%;
      max-width: 302px;
      height: auto;

      path {
        transition: 0.2s ease-in-out;
      }

      &:hover {
        path {
          fill: red;
          filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4)
            brightness(1);
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding-left: 0;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1200px) {
    left: -60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  max-width: 25rem;
  align-self: center;

  @media (min-width: 1000px) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-family: var(--ff-light);
  font-size: 4rem;
  line-height: 90%;
  letter-spacing: -0.01rem;
  text-transform: uppercase;
  color: var(--cr-text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    display: block;
  }

  & span:first-of-type {
    font-family: var(--ff-bold);
    font-style: italic;
  }
  & span:nth-of-type(2) {
    font-family: var(--ff-medium);
  }

  @media (min-width: 1000px) {
    font-size: 6rem;

    & span:nth-of-type(2) {
      font-size: 85px;
      line-height: 76px;
    }
  }
`;

const Description = styled.p`
  font-family: var(--ff-light);
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #d7ddef;

  span {
    font-family: var(--ff-medium);
    font-weight: 500;
    color: var(--cr-text);
  }
`;

const Links = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  li {
    font-family: var(--ff-medium);
    font-weight: 500;
    font-size: 9px;
    line-height: 90%;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--cr-text);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      text-shadow: var(--shadow-hover);
      transition: 0.1s ease-in-out;
    }
  }
`;

export const ContentLeft = () => {
  return (
    <Wrapper>
      <NavBar>
        <MenuWrapper>
          <RiMenu2Fill size={'2em'} color={'#fff'} />
        </MenuWrapper>
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
          The fourth and final season of the Attack on Titan anime television
          series, titled Attack on Titan: The Final Season, is{' '}
          <span>produced by MAPPA</span>, chief directed by Jun Shishido, and
          directed by Yūichirō Hayashi, replacing Tetsurō Araki and Masashi
          Koizuka respectively. Scriptwriter <span>Hiroshi Seko</span> took over
          the series composition from <span>Yasuko Kobayashi</span>, and
          Tomohiro Kishi replaced Kyōji Asano as character designer due to the
          series switching production studios.
        </Description>

        <Links>
          {links.map((link, i) => (
            <li key={i}>
              <a href='#home' rel='noopener noreferrer'>
                {link}
              </a>
            </li>
          ))}
        </Links>
      </Content>
    </Wrapper>
  );
};
