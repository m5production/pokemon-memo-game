import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameSlice';
import cardsReducer from './reducers/cardsSlice';
import roundReducer from './reducers/roundSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    cards: cardsReducer,
    round: roundReducer,
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
