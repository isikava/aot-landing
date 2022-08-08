import styled from 'styled-components';

/* Wrappers --> */
export const HeroWrapper = styled.div`
  position: relative;
  background: var(--grad-darkblue);

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

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;

  @media (min-width: 800px) {
    padding-right: 1rem;
  }

  @media (min-width: 1200px) {
    padding-left: 8.4rem;
    padding-right: 81px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  min-width: 0; // hide overflow
  max-width: 895px;
  padding-bottom: 3rem;

  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`;
/* <-- Wrappers */

/* Elements --> */
export const NavBar = styled.div`
  display: flex;
  position: relative;
  margin: 3rem 0;
  padding-left: 4rem;

  a {
    svg {
      width: 100%;
      max-width: 302px;
      height: auto;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 0;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1200px) {
    left: -60px;
  }
`;

export const Content = styled.div`
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

export const Title = styled.h1`
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

export const Description = styled.p`
  font-family: var(--ff-light);
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #d7ddef;
  margin-bottom: 2rem;

  span {
    font-family: var(--ff-medium);
    font-weight: 500;
    color: var(--cr-text);
  }

  @media (min-width: 500px) {
    margin-bottom: 4rem;
  }
`;

export const Links = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

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

export const Trailers = styled.div`
  h2 {
    font-family: var(--ff-medium);
    font-size: 1.5rem;
    line-height: 90%;
    color: var(--cr-text);
    margin: 1rem 0;
  }
`;

/* <-- Elements */
