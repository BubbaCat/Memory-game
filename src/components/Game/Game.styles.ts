import styled from 'styled-components';

export const GameField = styled.div`
	display: grid;
	margin:auto;
	width:98vw;
	grid-template-columns: repeat(6,minmax(20px, 1fr));
	grid-template-rows: repeat(6,minmax(20px, 1fr));
	grid-gap: 10px;
	height: 94vh;
	justify-items:center;
`;	