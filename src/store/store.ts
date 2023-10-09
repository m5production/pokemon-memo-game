import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducers/cardsSlice';

export const store = configureStore({
  reducer: cardsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
