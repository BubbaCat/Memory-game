import { imgDataAPI } from './../../services/Service.interface';
import { ICard } from './../../components/Card/Card.props';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { imgAPI } from '../../services/ImgService';
import { createGameField } from '../../utils/utils';

export interface GameState {
	id:number;
	isPlayable:boolean,
	isFirstGame:boolean,
	pairsFound:number,
	chosenCard:undefined | ICard,
	Cards: ICard[]
}

const initialState: GameState = {
	id:Date.now(),
	isFirstGame:true,
	isPlayable: false,
	pairsFound:0,
	chosenCard: undefined,
	Cards:[],
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
		setCards:(state,action:PayloadAction<ICard[]>)=>{
			state.Cards = action.payload;
		},
		flipCard:(state,action:PayloadAction<ICard>)=>{
			state.Cards=state.Cards.map((prevCard: ICard) =>
				(prevCard.id === action.payload.id ? { ...prevCard, isFlipped: true } : prevCard));
		},
		flipCardBack:(state,action:PayloadAction<ICard>)=>{
			state.Cards=state.Cards.map((prevCard: ICard) =>
				(prevCard.id === action.payload.id ? { ...prevCard, isFlipped: false } : prevCard));
		},
		flipPairsBack:(state,action:PayloadAction<ICard>)=>{
			state.Cards=state.Cards.map((prevCard: ICard) =>
				(prevCard.pairId === action.payload.pairId ? { ...prevCard, isFlipped: false } : prevCard));
		},
		flipDifferentBack:(state,action:PayloadAction<ICard>)=>{
			state.Cards=state.Cards.map((prevCard: ICard) =>
				( prevCard.id === action.payload.id ||  prevCard.pairId === action.payload.pairId ? { ...prevCard, isFlipped: false } : prevCard));
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
	extraReducers: {
		[fetchImgs.pending.type]:(state:GameState)=>{
			state.Cards=[];
		},
		[fetchImgs.fulfilled.type]:(state:GameState,action:PayloadAction<imgDataAPI[]>)=>{
			state.Cards = createGameField(action.payload);
		},
		[fetchImgs.rejected.type]:(state:GameState)=>{
			state.Cards=[];
		},
	}
});

export const {
	changeGameState,
	incrementFoundPairs,
	choseCard,
	resetChosenCards,
	flipCardBack,
	flipCard,flipPairsBack,
	flipDifferentBack,
	setCards,
	restartGame,
	firstGameEnded} = gameStateSlice.actions;
export default gameStateSlice.reducer;