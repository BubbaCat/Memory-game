import { ICard } from './../../components/Card/Card.props';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { imgAPI } from '../../services/ImgService';

export interface GameState {
	id:number;
	isPlayable:boolean,
	isFirstGame:boolean,
	pairsFound:number,
	chosenCard:undefined | ICard,
}

const initialState: GameState = {
	id:Date.now(),
	isFirstGame:true,
	isPlayable: false,
	pairsFound:0,
	chosenCard: undefined,
};

export const fetchImgs= createAsyncThunk('gameState/fetchImgs',
	async ()=> {
		const res = await imgAPI.getPhotos(18);
		return res;
	});

const gameStateSlice = createSlice({
	name:'gameState',
	initialState,
	reducers: {
		restartGame:(state)=>{
			state.id=Date.now();
			state.pairsFound=0;
			state.chosenCard=undefined;
		},
		firstGameEnded:(state)=>{
			state.isFirstGame=false;
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
	},
});

export const {
	changeGameState,
	incrementFoundPairs,
	choseCard,
	resetChosenCards,
	restartGame,
	firstGameEnded} = gameStateSlice.actions;
export default gameStateSlice.reducer;