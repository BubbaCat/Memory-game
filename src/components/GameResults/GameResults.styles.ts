import styled from 'styled-components';

export const Container = styled.div`
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	overflow-y:scroll;
	&::-webkit-scrollbar {
  		display: none;
	}
	`;	
export const ResultHeader = styled.div`
	width:100%;
	text-align:center;
	margin-top:15px;
	font-size:25px;
	border-bottom:1px solid black;
	`;	
export const Result = styled.div`
	width:100%;
	padding:10px 0;
	text-align:center;
	font-size:20px;
	border-bottom:1px solid black;
	`;	
