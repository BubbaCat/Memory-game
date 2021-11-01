import { imgDataAPI } from '../services/ImgService';
import {  ICard } from '../components/Card/Card.props';

export function shuffleArray<T>(arr: T[]): T[] {
	const shuffledArray: Array<T> = [...arr];
	for (let currentIndex = arr.length - 1; currentIndex > 0; currentIndex--) {
		const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
		[shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
	}
	return shuffledArray;
}

export function createCards(arr:imgDataAPI[]):ICard[]
{
	return [...arr,...arr].map((card,i)=>
		({
			id:card.id+i,
			alt_description:card.alt_description || undefined,
			frontImgUrl:card.urls.regular,
			isFlipped:false,
			isVisible:true,
			pairId:card.id,										
		}));
}

export function createGameField(arr:imgDataAPI[]):ICard[]
{
	return shuffleArray(createCards(arr));
}


