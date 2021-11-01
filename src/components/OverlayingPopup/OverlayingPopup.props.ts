import { MouseEvent,KeyboardEvent } from 'react';

export interface PopupProps{
	children: React.ReactNode;
	isOpened:boolean;
	onClose:(e:MouseEvent|KeyboardEvent)=>void;
}