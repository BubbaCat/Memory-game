import { createSlice } from '@reduxjs/toolkit';

export interface TimerState {
	elapsedTime:number,
	isActive:boolean,
}

const initialState: TimerState = {
	elapsedTime: 0,
	isActive:false,
};

const timerSlice = createSlice({
	name:'timer',
	initialState,
	reducers: {
		increment:(state)=>{
			state.elapsedTime+=1;
		},
		reset:(state)=>{
			state.elapsedTime=0; 
			state.isActive=false;
		},
		changeTimerState:(state)=>{
			state.isActive=!state.isActive;
		}
	}
});


export const {increment,reset,changeTimerState} = timerSlice.actions;

export default timerSlice.reducer;