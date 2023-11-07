import { Container } from './style';
import { RiPlayFill, RiRewindFill, RiSpeedFill } from 'react-icons/ri';
import ImgCover from '../../assets/player_cover.jpeg'

export const Player = () => {
  return (
    <>
      <Container>
        <img src={ImgCover} alt="" />
        <h1></h1>
        <p></p>

        <div>
          <RiRewindFill />
          <RiPlayFill />
          <RiSpeedFill />
        </div>
      </Container>
    </>
  );
};