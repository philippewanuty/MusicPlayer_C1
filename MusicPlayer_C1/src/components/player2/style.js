import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.75rem;

	padding: 1.75rem;
	border-radius: 0.625rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const PlayerContent = styled.div`
	display: flex;
	gap: 1.75rem;

	img {
		width: 5.25rem;
		height: 5.25rem;
		border-radius: 0.375rem;
	}
`;

export const Text = styled.div`
	h1 {
		color: ${({ theme }) => theme.COLORS.PLATINUM};
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.5rem;
		margin-bottom: 0.625rem;
	}

	> p {
		color: ${({ theme }) => theme.COLORS.PLATINUM};
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

		color: ${({ theme }) => theme.COLORS.PLATINUM};
	}
`;

export const Play = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	> svg {
		height: 1.75rem;
		width: 1.75rem;

		color: ${({ theme }) => theme.COLORS.PLATINUM};
	}
`;

export const FastForward = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	> svg {
		height: 1.75rem;
		width: 1.75rem;

		color: ${({ theme }) => theme.COLORS.PLATINUM};
	}
`;

export const PlayerComponents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.675rem;
`;

export const ProgressBar = styled.div`
	position: relative;

	&::before {
		content: '';
		height: 6px;
		width: 100%;
		display: block;
		background: ${({ theme }) => theme.COLORS.GRAY_85};
		opacity: 0.3;
		border-radius: 10px;

		position: absolute;
	}

	&::after {
		content: '';
		height: 6px;
		width: 80%;
		display: block;
		background: ${({ theme }) => theme.COLORS.GRAY_85};
		border-radius: 10px;
	}
`;

export const Timer = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;

	color: ${({ theme }) => theme.COLORS.LAVANDER_GRAY};
`;
