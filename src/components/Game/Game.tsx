import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameField } from './Game.styles';
import { Card } from '..';
import { imgAPI } from '../../services/ImgService';
import { ICard } from '../Card/Card.props';
import { createGameField } from '../../utils/utils';
import { RootState } from '../../store';
import { changeGameState, incrementFoundPairs,choseCard} from '../../store/slices/game.slice';
import { changeTimerState } from '../../store/slices/timer.slice';
import { addResult } from '../../store/slices/results.slice';

export const Game: React.FC = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [timeout, setClearTimeout] = useState<NodeJS.Timer>(0 as unknown as NodeJS.Timer);
	const chosenCard = useSelector((state: RootState) => state.gameState.chosenCard);
	const pairsFound = useSelector((state: RootState) => state.gameState.pairsFound);
	const elapsedTime = useSelector((state: RootState) => state.timerState.elapsedTime);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const loadCards = async() => {
			const res = await imgAPI.getPhotos(18);
			setCards(createGameField(res));	
		};
		loadCards();
	}, []);

	useEffect(() => {
		if (pairsFound === cards.length / 2 && pairsFound!==0) {
			dispatch(changeGameState());
			dispatch(changeTimerState());
			dispatch(addResult({seconds:elapsedTime,id:Date.now()}));
		}
	}, [pairsFound]);


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
/*
	const [timeout, setClearTimeout] = useState<NodeJS.Timer>(0 as unknown as NodeJS.Timer);
	const chosenCard = useSelector((state: RootState) => state.gameState.chosenCard);
	const pairsFound = useSelector((state: RootState) => state.gameState.pairsFound);
	const cards = useSelector((state: RootState) => state.gameState.Cards);

	const dispatch = useDispatch();

	useEffect(() => {
		imgAPI
			.getPhotos(18)
			.then((data) => dispatch(setCards(shuffleArray(createBoard(data)))));
	}, []);

	useEffect(() => {
		if (pairsFound === cards.length / 2 && pairsFound!==0) {
			dispatch(changeGameState());
			dispatch(changeTimerState());
		}
	}, [pairsFound]);


	const handleCardClick = (card: ICard) => {
		
		dispatch(setCards(
			cards.map((prevcard: ICard) =>
				(prevcard.id === card.id ? { ...prevcard, isFlipped: true } : prevcard))
		));

		if (chosenCard === undefined) {
			setClearTimeout(setTimeout(() => {

				dispatch(setCards(
					cards.map((prevcard: ICard) =>
						(prevcard.id === card.id ? { ...prevcard, isFlipped: false } : prevcard))
				));
			
				dispatch(choseCard(undefined));
			}, 5000));
			
			dispatch(choseCard(card));
			return;
		}
		
		clearTimeout(timeout);
		if (chosenCard.pairId === card.pairId && card.id!=chosenCard.id) {
			dispatch(
				setCards(
					cards.map((prevCard: ICard) =>
						(prevCard.pairId === card.pairId ? { ...prevCard, isFlipped: false } : prevCard))
				));
			dispatch(incrementFoundPairs());
			dispatch(choseCard(undefined));

			return;
		}


*/ 