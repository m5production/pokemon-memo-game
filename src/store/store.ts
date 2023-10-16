import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameSlice';
import cardsReducer from './reducers/cardsSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    cards: cardsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
