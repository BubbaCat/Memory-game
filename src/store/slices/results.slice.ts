import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Result {
	seconds:number;
	id:number;
}

export interface ResultsState {
	results:Result[];
}

const initialState: ResultsState = {
	results:[],
};

const resultSlice = createSlice({
	name:'timer',
	initialState,
	reducers: {
		addResult:(state,action:PayloadAction<Result>)=>{
			state.results.push(action.payload);
		},
	}
});


export const {addResult} = resultSlice.actions;

export default resultSlice.reducer;