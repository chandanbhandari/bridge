import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { range, shuffle } from 'lodash';
import { splitRankAndSuit } from '../../utils';
import { Direction } from '../../types';

const initialState = {
  north: [],
  east: [],
  west: [],
  south: [],
};

export function allCards() {
  // @ts-expect-error
  return range(2, 11)
    .concat(['J', 'Q', 'K', 'A'])
    .reduce((acc: any[], curr: any) => {
      acc.push(`${curr}♣`);
      acc.push(`${curr}♦`);
      acc.push(`${curr}♥`);
      acc.push(`${curr}♠`);
      return acc;
    }, []);
}

export function shuffledCards() {
  return shuffle(allCards());
}

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    deal: (state, action: PayloadAction<Direction>) => {
      let direction = action.payload;
      const directionMap: Record<string, Direction> = {
        north: 'east',
        east: 'south',
        south: 'west',
        west: 'north',
      };
      return shuffledCards().reduce(
        (acc: any, card: string) => {
          acc[direction].push(splitRankAndSuit(card));
          direction = directionMap[direction];
          return acc;
        },
        {
          north: [],
          east: [],
          south: [],
          west: [],
        },
      );
    },
  },
});

export const { actions, reducer } = slice;
