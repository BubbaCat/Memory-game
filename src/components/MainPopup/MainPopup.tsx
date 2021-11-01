import React, { MouseEvent,KeyboardEvent} from 'react';
import { OverlayingPopup } from '..';
import { MainPopupProps } from './MainPopup.props';
import { Container,Header, Title,CloseIcon } from './MainPopup.styles';

export const MainPopup:React.FC<MainPopupProps> = ({children,isOpened,onClose,title}:MainPopupProps)=>{

	const handleKeyDown = (e:KeyboardEvent) => {
		if(e.key===' ' || e.key==='Enter'){
			onClose(e);
		}
	};

	return (
		<OverlayingPopup 
			isOpened={isOpened} 
			onClose={onClose}>
			<Container 
				onClick={(e:MouseEvent)=>e.stopPropagation()}>
				<Header>
					<Title>{title}</Title>
					<CloseIcon 
						tabIndex={0} 
						onKeyDown={(e)=>handleKeyDown(e)} 
						onClick={(e:MouseEvent)=>onClose(e)}
					/>
				</Header>
				{children}
			</Container>
		</OverlayingPopup>
	);
};