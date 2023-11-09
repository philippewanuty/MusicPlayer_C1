import { Player } from '../../components/player';
import { Player2} from '../../components/player2';
import { Container } from './style';


export const MainPage = () => {
  return (
			<>
				<Container>
					<Player name={'Awesome God'} content={'Hillsong - Young and Free'} />
					<Player2 name='Take it all' content={'Hillsong - Young and Free'} showComponents={true} />
					<Player2 name='Oceans' content={'Hillsong United'} showComponents={false} />
				</Container>
			</>
		);
};

