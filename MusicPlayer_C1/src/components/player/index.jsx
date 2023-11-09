import { Container, Rewind, Play, FastForward, PlayerButtons, Timer, ProgressBar, PlayerComponents, Text } from './style';
import { RiPlayFill, RiRewindFill, RiSpeedFill } from 'react-icons/ri';
import ImgCover from '../../assets/player_cover.jpeg';

export const Player = ({ name, content }) => {
	return (
		<>
			<Container>
				<img src={ImgCover} alt='' />

				<Text>
					<h1>{name}</h1>
					<p>{content}</p>
				</Text>

				<PlayerButtons>
					<Rewind>
						<RiRewindFill />
					</Rewind>
					<Play>
						<RiPlayFill />
					</Play>
					<FastForward>
						<RiSpeedFill />
					</FastForward>
				</PlayerButtons>

				<PlayerComponents>
					<ProgressBar />
					<Timer>
						<p>12:13</p>
						<p>12:13</p>
					</Timer>
				</PlayerComponents>
			</Container>
		</>
	);
};
