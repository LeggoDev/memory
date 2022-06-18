import { configureStore } from '@reduxjs/toolkit';

import GameReducer from './features/GameSlice';
import ResultReducer from './features/ResultSlice';

export const store = configureStore({
  reducer: {
    game: GameReducer,
    result: ResultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
