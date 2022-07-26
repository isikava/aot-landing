import styled from 'styled-components';

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

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 27, 112, 1) 0%,
    rgba(0, 9, 35, 1) 100%
  );

  &:after {
    position: absolute;
    content: '';
    inset: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.img}) no-repeat;
    background-size: cover;
    background-position: 70% center;

    mix-blend-mode: lighten;
    opacity: 0.3;
    transform: scaleX(-1);
  }

  @media (min-width: 800px) {
    position: absolute;
    height: var(--height-hero);

    &:after {
      background-size: auto 115%;
      background-position: bottom;
    }
  }
`;
