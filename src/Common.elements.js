import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  background: var(--gr-darkblue);

  &:before {
    position: fixed;
    content: '';
    inset: 0;
    width: 100%;
    height: 100vh;
    background: url(${(props) => props.bgImg}) no-repeat;
    background-size: cover;
    background-position: 70% center;

    mix-blend-mode: lighten;
    opacity: 0.3;
    transform: scaleX(-1);
  }

  & > * {
    height: 100%;
    position: relative;
  }

  @media (min-width: 800px) {
    height: var(--height-hero);

    &:before {
      position: absolute;
      height: 100%;
      background-size: auto 115%;
      background-position: bottom;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;
