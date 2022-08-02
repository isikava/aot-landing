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
