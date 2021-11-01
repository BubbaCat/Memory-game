import React from 'react';
import { ButtonProps } from './Button.props';
import { ButtonStyled } from './Button.styles';

export const Button:React.FC<ButtonProps> = ({value,onClick,color}:ButtonProps) => {
	return (
		<ButtonStyled 
			tabIndex={0} 
			onClick={onClick}
			primary={color}>
			<span>
				{value}
			</span>
		</ButtonStyled>
	);
};