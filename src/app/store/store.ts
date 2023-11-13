import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {},
	devTools: true,
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;
