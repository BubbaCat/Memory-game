import { ICard } from './../../components/Card/Card.props';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
	isPlayable:boolean,
	pairsFound:number,
	chosenCard:undefined | ICard,
	Cards: ICard[]
}

const initialState: GameState = {
	isPlayable: false,
	pairsFound:0,
	chosenCard: undefined,
	Cards:[],
};

const gameStateSlice = createSlice({
	name:'gameState',
	initialState,
	reducers: {
		setCards:(state,action:PayloadAction<ICard[]>)=>{
			state.Cards = action.payload;
		},
		changeGameState:(state)=>{
			state.isPlayable = !state.isPlayable;
		},
		incrementFoundPairs:(state)=>{
			state.pairsFound++;
		},
		choseCard:(state,action:PayloadAction<ICard|undefined>)=>{
			state.chosenCard = action.payload;
		},
		resetChosenCards:(state)=>{
			state.chosenCard = undefined;
		}
	}
});

export const {
	changeGameState,
	incrementFoundPairs,
	choseCard,
	resetChosenCards,
	setCards} = gameStateSlice.actions;
export default gameStateSlice.reducer;