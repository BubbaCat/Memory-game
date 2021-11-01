import {configureStore} from '@reduxjs/toolkit';
import timerReducer from './slices/timer.slice';
import gameStateReducer from './slices/game.slice';
import resultReducer from './slices/results.slice';

export const store = configureStore({
	reducer: {
		timerState: timerReducer,
		gameState:gameStateReducer,
		resultState:resultReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;  
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export default store;
