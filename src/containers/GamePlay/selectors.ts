import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { getSorteddCards } from '../../utils';

const gameSelector = (state: RootState) => state.game;

export const northPlayerDataSelector = createSelector(
  gameSelector,
  ({ north }) => getSorteddCards(north),
);

export const southPlayerDataSelector = createSelector(
  gameSelector,
  ({ south }) => getSorteddCards(south),
);

export const eastPlayerDataSelector = createSelector(
  gameSelector,
  ({ west }) => getSorteddCards(west),
);

export const westPlayerDataSelector = createSelector(
  gameSelector,
  ({ north }) => getSorteddCards(north),
);
