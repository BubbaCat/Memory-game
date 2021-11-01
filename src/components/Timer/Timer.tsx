import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../store/slices/timer.slice';
import { TimerProps } from './Timer.props';
import { Wrapper } from './Timer.styles';

export const Timer:React.FC<TimerProps> = ({isActive,elapsedTime}:TimerProps) => {
	const dispatch = useDispatch();

	useEffect(()=>{
		let interval:NodeJS.Timer=0 as unknown as NodeJS.Timer;

		if(isActive){
			interval = setInterval(()=>{
				dispatch(increment());
			},1000);
		} 
		else if(!isActive && elapsedTime !==0){
			clearInterval(interval);
		}
		return ()=>clearInterval(interval);
	},[isActive,elapsedTime]);

	return (
		<Wrapper>
			<span>
				{elapsedTime}
			</span>
		</Wrapper>
	);
};

