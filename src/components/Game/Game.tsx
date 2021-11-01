import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameField } from './Game.styles';
import { Card } from '..';
import { imgAPI } from '../../services/ImgService';
import { ServiceAPI,imgDataAPI} from '../../services/Service.interface';
import { ICard } from '../Card/Card.props';
import { createGameField } from '../../utils/utils';
import { RootState } from '../../store';
import { incrementFoundPairs,choseCard, firstGameEnded} from '../../store/slices/game.slice';
import { changeTimerState } from '../../store/slices/timer.slice';
import { addResult } from '../../store/slices/results.slice';

export const Game: React.FC = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [timeout, setClearTimeout] = useState<NodeJS.Timer>(0 as unknown as NodeJS.Timer);
	const chosenCard = useSelector((state: RootState) => state.gameState.chosenCard);
	const pairsFound = useSelector((state: RootState) => state.gameState.pairsFound);
	const gameId = useSelector((state: RootState) => state.gameState.id);
	const elapsedTime = useSelector((state: RootState) => state.timerState.elapsedTime);
	//const cards = useSelector((state: RootState) => state.gameState.Cards);

	const dispatch = useDispatch();

	useEffect(() => {
		const loadCards = async(service:ServiceAPI<imgDataAPI[]>) => {
			const res = await service.getPhotos(18);
			setCards(createGameField(res));
		};
		loadCards(imgAPI);
	}, [gameId]);

	useEffect(() => {
		if (pairsFound === cards.length / 2 && pairsFound!==0) {
			dispatch(changeTimerState());
			dispatch(firstGameEnded());
			dispatch(addResult({seconds:elapsedTime,id:Date.now()}));
		}
	}, [pairsFound]);

	// const handleCardClick = (card: ICard) => {
	// 	dispatch(flipCard(card));

	// 	if (chosenCard === undefined) {
	// 		setClearTimeout(setTimeout(() => {
	// 			dispatch(flipCardBack(card));
	// 			dispatch(choseCard(undefined));}
	// 		, 5000));
	// 		dispatch(choseCard(card));
	// 		return;
	// 	}
		
	// 	clearTimeout(timeout);
	// 	if (chosenCard.pairId === card.pairId && card.id!=chosenCard.id) {
	// 		dispatch(flipPairsBack(card));
	// 		dispatch(incrementFoundPairs());
	// 		dispatch(choseCard(undefined));

	// 		return;
	// 	}

	// 	setTimeout(() => {
	// 		dispatch(flipDifferentBack(card));
	// 	}, 800);

	// 	dispatch(choseCard(undefined));
	// };


	const handleCardClick = useCallback((card: ICard) => {
		setCards((prevState): ICard[] =>
			prevState.map((prevcard: ICard) =>
				(prevcard.id === card.id ? { ...prevcard, isFlipped: true } : prevcard)));

		if (chosenCard === undefined) {
			setClearTimeout(setTimeout(() => {
				setCards((prevState): ICard[] =>
					prevState.map((prevCard: ICard) =>
						(prevCard.id === card.id ? { ...prevCard, isFlipped: false } : prevCard)));
				dispatch(choseCard(undefined));}
			, 5000));
			dispatch(choseCard(card));
			return;
		}
		
		clearTimeout(timeout);
		if (chosenCard.pairId === card.pairId && card.id!=chosenCard.id) {
			setCards((prevState): ICard[] =>
				prevState.map((prevCard: ICard) =>
					(prevCard.pairId === card.pairId ? { ...prevCard, isVisible: false } : prevCard)));

			dispatch(incrementFoundPairs());
			dispatch(choseCard(undefined));

			return;
		}

		setTimeout(() => {
			setCards((prevState): ICard[] =>
				prevState.map((prevCard: ICard) =>
					(prevCard.id === card.id || prevCard.pairId === chosenCard.pairId ? { ...prevCard, isFlipped: false } : prevCard)));
		}, 800);

		dispatch(choseCard(undefined));
	},[cards,chosenCard]);


	const renderCards = (photosArr: ICard[]) => {
		return photosArr.map((card, i) => {
			return (
				<Card
					key={card.id+i}
					card={card}
					handleClick={handleCardClick}
				/>
			);
		});
	};


	return (
		<>
			<GameField>
				{cards && renderCards(cards)}
			</GameField>
		</>
	);
};