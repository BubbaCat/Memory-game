import React, { MouseEvent } from 'react';
import { PopupProps } from './OverlayingPopup.props';
import { Overlay } from './OverlayingPopup.styles';


export const OverlayingPopup:React.FC<PopupProps>= ({children,isOpened,onClose}:PopupProps)=>{
	if(!isOpened)
	{
		return null;
	}
	
	return (
		<Overlay
			role="button"
			tabIndex={0}
			onClick={(e:MouseEvent)=> onClose(e)}
		>
			{children}
		</Overlay>
	); 
};