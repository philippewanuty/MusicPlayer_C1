import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 12.5rem;

  grid-template-areas:
    'player1 player2'
    'player1 player3';

  gap: 2rem;

  :nth-child(1) {
    grid-area: player1;
  }

  :nth-child(2) {
    grid-area: player2;
  }

  :nth-child(3) {
    grid-area: player3;
  }
`;
