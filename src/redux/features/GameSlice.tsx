import { createSlice } from '@reduxjs/toolkit';

export interface GameState {
  value: boolean;
}

const initialState: GameState = {
  value: false,
};

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    launchGame: (state) => {
      state.value = true;
    },

    stopGame: (state) => {
      state.value = false;
    },
  },
});

export const { launchGame, stopGame } = GameSlice.actions;

export default GameSlice.reducer;
