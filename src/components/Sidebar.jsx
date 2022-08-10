import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';

import { navLinks } from '../data/data';

const SidebarStyle = styled(motion.aside)`
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-between;
  background: var(--grad-darkblue);
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 3rem 1rem;
  z-index: 99;

  @media (min-width: 500px) {
    width: 300px;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      font-family: var(--ff-light);
      font-size: 2rem;
      text-transform: capitalize;
      color: #fff;
      padding: 0.3rem 0;
    }
  }

  @media (min-width: 500px) {
  }
`;

const CloseIcon = styled(RiCloseFill)`
  cursor: pointer;
  font-size: 2.5rem;
  color: #fff;
`;

const transition = {
  duration: 0.3,
};

export const Sidebar = ({ show, toggle }) => {
  return (
    <AnimatePresence>
      {show && (
        <SidebarStyle
          initial={{ x: '-100%' }}
          animate={{ x: 0, transition }}
          exit={{
            x: '-100%',
            transition: {
              ...transition,
              duration: 0.5,
            },
          }}
        >
          <Nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </Nav>
          <CloseIcon onClick={toggle} />
        </SidebarStyle>
      )}
    </AnimatePresence>
  );
};
