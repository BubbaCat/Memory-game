import styled from 'styled-components';

interface imgProps {
	isFlipped:boolean;
}

interface wrapperProps {
	isVisible:boolean;
}

export const CardWrapper = styled.div<wrapperProps>`
	border-radius:10px;
	position: relative;
	width:100%;
	height:100%;
    overflow:hidden;
	transition: all 1s;
	opacity:${props=>(props.isVisible ? '1' : '0')};
	visibility:${props=>(props.isVisible ? 'visible' : 'hidden')};
	&:focus {
        outline: palevioletred 4px solid;
        box-shadow: 0px 0px 2px red;
    }
	`;

export const Img = styled.img`
	width:100%;
	height:100%;
	transition: all 0.8s;
	backface-visibility: hidden;
	cursor: pointer;
	object-fit:cover;
	`;

export const FrontImg = styled(Img)<imgProps>`
	z-index:${props=>(props.isFlipped ? 1 : 0)};
	transform:${props=>(props.isFlipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
	`;

export const BackImg = styled(Img)<imgProps>`
	z-index:${props=>(props.isFlipped ? 0 : 1)};
	transform:${props=>(props.isFlipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
	position:absolute;
	top:0;
	left:0;
	`;