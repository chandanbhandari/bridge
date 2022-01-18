import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  bids: string[];
  dealer: string;
  enabled: boolean;
  active: string;
};

const initialState: InitialState = {
  bids: [],
  dealer: 'north',
  enabled: true,
  active: 'north',
};

const slice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    placeBid: (state: InitialState, action: PayloadAction<string>) => {
      state.bids = state.bids.concat(action.payload);
    },
    reset: () => initialState,
  },
});

export const { actions, reducer } = slice;
