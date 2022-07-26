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

  /* width: 100%; */
  /* max-width: 545px; */
  height: 100vh;
  padding-bottom: 3rem;

  @media (min-width: 800px) {
    flex: 1;
    height: var(--height-hero);

    padding-right: 1rem;
  }

  @media (min-width: 1200px) {
    padding-right: 92px;
  }
`;

const NavBar = styled.div`
  display: flex;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 4rem;
  padding-left: 4rem;

  @media (min-width: 1000px) {
    padding-left: 8.4rem;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1000px) {
    left: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  h1 {
    font-family: var(--ff-light);
    font-size: 4rem;
    line-height: 90%;
    letter-spacing: -0.01rem;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;

    span {
      display: block;
    }

    & span:first-child {
      font-family: var(--ff-bold);
      font-style: italic;
    }
    & span:nth-child(2) {
      font-family: var(--ff-medium);
    }

    @media (min-width: 1000px) {
    }
  }

  p {
    font-family: var(--ff-light);
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #d7ddef;

    span {
      font-family: var(--ff-medium);
      font-weight: 500;
      color: #fff;
    }
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
    padding-left: 8.4rem;

    h1 {
      font-size: 6rem;

      & span:nth-child(2) {
        font-size: 85px;
        line-height: 76px;
      }
    }
  }
`;

// const Watch = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 1.5rem 0;
// `;

// const WatchText = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-left: 1rem;

//   color: #fff;
//   font-family: var(--ff-medium);
//   font-weight: 500;
//   font-size: 1.5rem;
//   line-height: 90%;
//   letter-spacing: -0.01em;

//   & > span {
//     font-family: var(--ff-light);
//     font-weight: 300;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//   }

//   &:hover {
//     text-shadow: 1px 1px 2px #000, 0 0 25px blue, 0 0 5px darkblue;
//     transition: 0.1s ease-in-out;
//   }
// `;

const Links = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  a {
    font-family: var(--ff-medium);
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
        <a href='/' alt='Logo'>
          <Logo />
        </a>
      </NavBar>

      <Content>
        <h1>
          The <span>Final</span> <span>Season</span>
        </h1>

        <WatchBtn />

        {/* <Watch>
          <PlayButton />
          <WatchText>
            Watch
            <span>December 7</span>
          </WatchText>
        </Watch> */}

        <p>
          The fourth and final season of the Attack on Titan anime television
          series, titled Attack on Titan: The Final Season, is{' '}
          <span>produced by MAPPA</span>, chief directed by Jun Shishido, and
          directed by Yūichirō Hayashi, replacing Tetsurō Araki and Masashi
          Koizuka respectively. Scriptwriter <span>Hiroshi Seko</span> took over
          the series composition from <span>Yasuko Kobayashi</span>, and
          Tomohiro Kishi replaced Kyōji Asano as character designer due to the
          series switching production studios.
        </p>

        <Links>
          {links.map((link, i) => (
            <li key={i}>
              <a href='/' rel='noopener noreferrer'>
                {link}
              </a>
            </li>
          ))}
        </Links>
      </Content>
    </Wrapper>
  );
};
