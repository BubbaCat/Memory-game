import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, GameResults, MainPopup } from '..';
import { RootState } from '../../store';
import { changeGameState, restartGame } from '../../store/slices/game.slice';
import { changeTimerState, reset } from '../../store/slices/timer.slice';
import { Timer } from '../Timer/Timer';
import { Wrapper } from './Header.styles';


export const Header:React.FC = () => {
	const [showResult, setShowResult] = useState<boolean>(false);
	const dispatch = useDispatch();
	const timerIsActive= useSelector((state:RootState)=>state.timerState.isActive);
	const timerElapsedTime = useSelector((state:RootState)=>state.timerState.elapsedTime);
	const isFirstGame = useSelector((state:RootState)=>state.gameState.isFirstGame);
	const results = useSelector((state: RootState) => state.resultState.results);

	const startGame=()=>{	
		dispatch(reset());
		dispatch(changeGameState());
		dispatch(changeTimerState());
	};
	
	const restart=()=>{	
		dispatch(reset());
		dispatch(restartGame());
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
				<GameResults 
				title={"Количество секунд"}
				results={[...results].sort((a,b) => a.seconds-b.seconds)}
				/>
			</MainPopup>
			<Button 
				value={`${!timerIsActive ? 'Старт' : 'Начать заново'}`} 
				onClick={timerIsActive || !isFirstGame ? restart : startGame} 
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
