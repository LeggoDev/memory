import { createSlice } from '@reduxjs/toolkit';

export interface ResultState {
  value: string | null;
}

const initialState: ResultState = {
  value: null,
};

export const ResultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    winGame: (state) => {
      state.value = 'won';
    },

    looseGame: (state) => {
      state.value = 'lost';
    },

    restartGame: (state) => {
      state.value = null;
    },
  },
});

export const { winGame, looseGame, restartGame } = ResultSlice.actions;

export default ResultSlice.reducer;
