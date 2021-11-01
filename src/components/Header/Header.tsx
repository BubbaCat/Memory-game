import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, GameResults, MainPopup } from '..';
import { RootState } from '../../store';
import { changeGameState } from '../../store/slices/game.slice';
import { changeTimerState } from '../../store/slices/timer.slice';
import { Timer } from '../Timer/Timer';
import { Wrapper } from './Header.styles';


export const Header:React.FC = () => {
	const [showResult, setShowResult] = useState<boolean>(false);
	const dispatch = useDispatch();
	const timerIsActive= useSelector((state:RootState)=>state.timerState.isActive);
	const timerElapsedTime = useSelector((state:RootState)=>state.timerState.elapsedTime);
	const gameIsActive = useSelector((state:RootState)=>state.gameState.isPlayable);

	const startGame=()=>{
		if(gameIsActive) {
			return;
		}
		dispatch(changeGameState());
		dispatch(changeTimerState());
	};

	const onClose = (e:MouseEvent|KeyboardEvent)=>{
		e.stopPropagation();
		setShowResult(false);
	};
	
	return (
		<Wrapper>
			<MainPopup
				isOpened={showResult}
				onClose={onClose}
				title={'Результаты'}>
				<GameResults />
			</MainPopup>
			<Button 
				value={`${!timerIsActive ? 'Старт' : 'Начать заново'}`} 
				onClick={startGame} 
				color 
			/>
			<Timer 
				isActive={timerIsActive} 
				elapsedTime={timerElapsedTime}/>
			<Button 
				value='Таблица Результатов' 
				onClick={()=>setShowResult(true)} />
		</Wrapper>
	);
};
