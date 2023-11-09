import styled from 'styled-components';
import {theme} from '../../theme'


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.75rem;

	padding: 2.375rem;
	border-radius: 0.625rem;

	background-color: ${theme.display_background};

	img {
		width: 11.875rem;
		height: 11.875rem;
		border-radius: 0.375rem;
	}
`;

export const Text = styled.div`
	h1 {
		color: ${theme.platinum};
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.5rem;
		margin-bottom: 0.625rem;
	}

	> p {
		color: ${theme.platinum};
		color: white;
		font-size: 1.188rem;
		font-weight: 400;
		line-height: 1.188rem;
		opacity: 67%;
	}
`;



export const PlayerButtons = styled.div`

	display: flex;
	justify-content: space-between;

	
`;

export const Rewind = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	> svg {
		height: 1.75rem;
		width: 1.75rem;

		color: ${theme.platinum};
	}
`;


export const Play = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	> svg {
		height: 1.75rem;
		width: 1.75rem;

		color: ${theme.platinum};
	}
`;

export const FastForward = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	> svg {
		height: 1.75rem;
		width: 1.75rem;

		color: ${theme.platinum};
	}
`;



export const PlayerComponents = styled.div`

display: flex;
flex-direction: column;
gap: 0.675rem;


`;


export const ProgressBar = styled.div`
	/* width: 100%;
	height: 4px;
	border-radius: 8px;

	background-color: grey; */

	position: relative;

	&::before {
		content: '';
		height: 6px;
		width: 100%;
		display: block;
		background: ${theme.Gray85};
		opacity: 0.3;
		border-radius: 10px;
		
		position: absolute;
	}

	&::after {
		content: '';
		height: 6px;
		width: 80%;
		display: block;
		background: ${theme.Gray85};
		border-radius: 10px;
	}

	/* 
	> div {
		width: 80%;
		height: 4px;
		border-radius: 8px;

		background-color: ${theme.Gray85};
	} */
`;

export const Timer = styled.div`

width: 100%;

display: flex;
justify-content: space-between;

color: ${theme.lavanderGray};

    
`;

