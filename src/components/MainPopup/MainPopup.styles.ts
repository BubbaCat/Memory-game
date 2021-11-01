import styled from 'styled-components';
import {ReactComponent as Icon} from './../../assets/closeIcon.svg'; 

export const Container = styled.div`
	position:absolute;
	z-index:10;
	padding:5px 10px;
	background-color:#f8f8f8;
	min-width:200px;
	min-width:500px;
	min-height:300px;
	max-height:600px;
	overflow:scroll;
	border-radius:15px;
	border:1px solid rgba(0,0,0,0.08);
	box-shadow:0 10px 40px rgba(0,0,0,0.1);
	cursor:initial;
	&::-webkit-scrollbar {
  		display: none;
	}
	`;	

export const CloseIcon = styled(Icon)`
		fill: #d3859e;
		position:absolute;
		right:10px;
		top:5px;
		cursor:pointer;
		width: 25px;
		height: 25px;
	`;

export const Header = styled.div`
		position:relavtive;
		display:flex;
		justify-content: center;
		`;	

export const Title = styled.div`
		font-size:30px;
`;