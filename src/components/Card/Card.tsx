import React, { KeyboardEvent } from 'react';
import { CardProps } from './Card.props';
import { CardWrapper,FrontImg,BackImg } from './Card.styles';
import BackImgLocal from '../../assets/card_back.jpg';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';


export const Card:React.FC<CardProps> = ({card, handleClick}:CardProps): JSX.Element => 
{
	const gameIsActive= useSelector((state:RootState)=>state.gameState.isPlayable);
	const {frontImgUrl,backImgUrl,isVisible,isFlipped,alt_description}=card;

	const handleImgClick = ()=> {
		if(!gameIsActive || isFlipped) return;
		handleClick(card);
	};

	const handleKeyDown = (e:KeyboardEvent) => {
		if(e.key===' '){
			handleImgClick();
		}
	};

	return (									
		<CardWrapper 
			tabIndex={0} 
			onKeyDown={(e)=>handleKeyDown(e)} 
			onClick={handleImgClick} 
			isVisible={isVisible} >
			<FrontImg 
				isFlipped={true} 
				src={frontImgUrl} 
				alt={alt_description || `Front image ${card.pairId}`}/>
			<BackImg 
				isFlipped={true} 
				src={backImgUrl || BackImgLocal}
				alt={'Back image'}/>
		</CardWrapper>
	);
};															