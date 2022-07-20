import React from 'react';
import styled from 'styled-components';
import { RiMenu2Fill } from 'react-icons/ri';

import { PlayButton } from './components/PlayButton';
import { ReactComponent as Logo } from './assets/logo.svg';

const links = ['facebook', 'twitter', 'instagram', 'youtube'];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 1024px;
  width: 100%;

  @media only screen and (min-width: 800px) {
    width: 545px;
    padding-right: 92px;
  }
`;

const NavBar = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
  padding-left: 4rem;

  @media only screen and (min-width: 800px) {
    margin-top: 3rem;
    padding-left: 8.4rem;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 800px) {
    left: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    padding-left: 8.4rem;
  }
`;

const Title = styled.div`
  h1 {
    font-family: var(--font-light);
    font-size: 4rem;
    line-height: 90%;
    letter-spacing: -0.01rem;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    display: block;
  }

  & span:first-child {
    font-family: var(--font-bold);
    font-style: italic;
  }
  & span:nth-child(2) {
    font-family: var(--font-medium);
  }

  @media only screen and (min-width: 800px) {
    h1 {
      font-size: 6rem;
    }
    & span:nth-child(2) {
      font-size: 85px;
      line-height: 76px;
    }
  }
`;

const Watch = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

const WatchText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 1rem;

  font-family: var(--font-medium);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 90%;
  letter-spacing: -0.01em;

  & > span {
    font-family: var(--font-light);
    font-weight: 300;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
`;

const Description = styled.div`
  text-align: left;

  p {
    font-family: var(--font-light);
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #d7ddef;

    span {
      font-family: var(--font-medium);
      font-weight: 500;
      color: #fff;
    }
  }
`;

const Links = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem 0 4rem;
  }

  a {
    font-family: var(--font-medium);
    font-weight: 500;
    font-size: 9px;
    line-height: 90%;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const ContentLeft = () => {
  return (
    <Wrapper>
      <NavBar>
        <MenuWrapper>
          <RiMenu2Fill size={'2em'} color={'#fff'} />
        </MenuWrapper>
        <Logo />
      </NavBar>

      <Content>
        <Title>
          <h1>
            The <span>Final</span> <span>Season</span>
          </h1>
        </Title>

        <Watch>
          <PlayButton />
          <WatchText>
            Watch
            <span>December 7</span>
          </WatchText>
        </Watch>

        <Description>
          <p>
            The fourth and final season of the Attack on Titan anime television
            series, titled Attack on Titan: The Final Season, is{' '}
            <span>produced by MAPPA</span>, chief directed by Jun Shishido, and
            directed by Yūichirō Hayashi, replacing Tetsurō Araki and Masashi
            Koizuka respectively. Scriptwriter <span>Hiroshi Seko</span> took
            over the series composition from <span>Yasuko Kobayashi</span>, and
            Tomohiro Kishi replaced Kyōji Asano as character designer due to the
            series switching production studios.
          </p>
        </Description>

        <Links>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href='/' rel='noopener noreferrer'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </Links>
      </Content>
    </Wrapper>
  );
};
