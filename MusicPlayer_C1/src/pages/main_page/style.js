import styled from 'styled-components';


export const Container = styled.div`
	display: grid;

	grid-template-columns: 16.625rem 22.375rem;
	grid-template-rows: 16.625rem 12.5rem;

	grid-template-areas:
		'player1 player2'
		'player1 player3';

	gap: 2rem;

	place-content: center;
	height: 100vh;

	:nth-child(1) {
		grid-area: player1;
	}
	
	:nth-child(2) {
		grid-area: player2;
	}

	:nth-child(3) {
		grid-area: player3;
	}

	@media (max-width: 690px) {

		display: flex;
		flex-direction: column;
		max-width: 270px;
		margin: auto;
		height: auto;
		padding-block: 60px;

	}
`;
