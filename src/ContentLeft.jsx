import React from 'react';
import styled from 'styled-components';

import { Logo } from './components';
import { PlayButton } from './components/PlayButton';

const links = ['facebook', 'twitter', 'instagram', 'youtube'];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoWrapper = styled.div`
  margin-top: 3.4rem;
`;

const Title = styled.div`
  margin-top: 9.3rem;

  span {
    display: block;
  }

  & span:first-child {
    font-family: 'Rubik Black';
    font-style: italic;
  }
  & span:nth-child(2) {
    font-family: 'Rubik Medium';
    font-size: 85px;
    line-height: 76px;
  }
`;

const Watch = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 1.5rem 1.5rem 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 1rem;

  font-family: 'Rubik Medium';
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 90%;
  letter-spacing: -0.01em;

  & > span {
    font-family: 'Rubik Light';
    font-weight: 300;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
`;

export const ContentLeft = () => {
  return (
    <div className='content-left'>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Title>
          <h1>
            The <span>Final</span> <span>Season</span>
          </h1>
        </Title>

        <Watch>
          <PlayButton />
          <InnerWrapper>
            Watch
            <span>December 7</span>
          </InnerWrapper>
        </Watch>

        <div>
          <p>
            The fourth and final season of the Attack on Titan anime television
            series, titled Attack on Titan: The Final Season, is produced by
            MAPPA, chief directed by Jun Shishido, and directed by Yūichirō
            Hayashi, replacing Tetsurō Araki and Masashi Koizuka respectively.
            Scriptwriter Hiroshi Seko took over the series composition from
            Yasuko Kobayashi, and Tomohiro Kishi replaced Kyōji Asano as
            character designer due to the series switching production studios.
          </p>
        </div>

        <div>
          <ul>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};
