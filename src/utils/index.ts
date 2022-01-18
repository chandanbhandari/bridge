import { includes, range } from 'lodash';
import { SplitCard } from '../types';

export const colorMap: Record<string, string> = {
  '♣': 'black',
  '♦': 'red',
  '♥': 'red',
  '♠': 'black',
};

export const splitRankAndSuit = (card: string) => {
  let rank = card.charAt(0);
  if (rank === '1') {
    rank = card.slice(0, 2);
  }
  return {
    rank,
    suit: card.slice(-1),
  };
};

export const suitOrder = ['♣', '♦', '♥', '♠', 'NT'];

export const cardToRank = (rank: string) => {
  if (rank === 'J') {
    return 11;
  }
  if (rank === 'Q') {
    return 12;
  }
  if (rank === 'K') {
    return 13;
  }
  if (rank === 'A') {
    return 14;
  }
  return Number(rank);
};

export const cardComparator = (card1: SplitCard, card2: SplitCard) => {
  const suit1 = suitOrder.indexOf(card1.suit);
  const suit2 = suitOrder.indexOf(card2.suit);
  const rank1 = cardToRank(card1.rank);
  const rank2 = cardToRank(card2.rank);
  return ((suit1 * 15) + rank1) - ((suit2 * 15) + rank2);
};

export const getSorteddCards = (cards: any[]) => [...cards].sort((a, b) => -cardComparator(a, b));

export const technicalBids = ['Pass', 'X', 'XX'];

export const trickBids = range(1, 8)
  .reduce((acc: any, tricks: any) => {
    suitOrder.reduce((_, suit) => {
      const bid = `${tricks}${suit}`;
      acc.push(bid);
      return acc;
    }, acc);
    return acc;
  }, []);

export const possibleBids = technicalBids.concat(trickBids);

export function bidComparator(bid1: string, bid2: string) {
  if (!includes(trickBids, bid1)) {
    throw new Error(`Unrecognized bid ${bid1}`);
  }
  if (!includes(trickBids, bid2)) {
    throw new Error(`Unrecognized bid ${bid2}`);
  }
  const tricks1 = Number(bid1.charAt(0));
  const tricks2 = Number(bid2.charAt(0));
  if (tricks1 !== tricks2) {
    return tricks1 - tricks2;
  }
  const suit1 = suitOrder.indexOf(bid1.slice(1));
  const suit2 = suitOrder.indexOf(bid2.slice(1));
  return suit1 - suit2;
}
