import { Player } from '../../components/player';
import { Container } from './style';


export const MainPage = () => {
  return (
    <>
      <Container>
        <Player />
        <Player />
        <Player />
      </Container>
    </>
  );
};

