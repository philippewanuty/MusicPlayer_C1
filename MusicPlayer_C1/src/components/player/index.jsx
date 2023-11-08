import { Container } from './style';
import { RiPlayFill, RiRewindFill, RiSpeedFill } from 'react-icons/ri';
import ImgCover from '../../assets/player_cover.jpeg'

export const Player = () => {
  return (
    <>
      <Container>
        <img src={ImgCover} alt="" />
        <h1>House of the lord</h1>
        <p>Hillsong - Young and Free</p>

        <div>
          <RiRewindFill />
          <RiPlayFill />
          <RiSpeedFill />
        </div>

        <div></div><div></div>
        
        <div>
          <p>03:20<p></p>00:12</p>
        </div>
      </Container>
    </>
  );
};