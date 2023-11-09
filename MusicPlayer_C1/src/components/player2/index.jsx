import { Container, Rewind, Play, FastForward, PlayerButtons, Timer, ProgressBar, PlayerComponents, Text, PlayerContent } from './style';
import { RiPlayFill, RiRewindFill, RiSpeedFill } from 'react-icons/ri';
import ImgCover from '../../assets/player_cover.jpeg';

export const Player2 = ({ name, content, showComponents }) => {
	return (
		<>
			<Container>
				<PlayerContent>
					<img src={ImgCover} alt='' />
					<Text>
						<h1>{name}</h1>
						<p>{content}</p>
					</Text>
				</PlayerContent>

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

				{showComponents && (
					<PlayerComponents>
						<ProgressBar />
						<Timer>
							<p>12:13</p>
							<p>01:13</p>
						</Timer>
					</PlayerComponents>
				)}
			</Container>
		</>
	);
};
