import { createSelector } from '@reduxjs/toolkit';
import { includes, last } from 'lodash';
import { RootState } from '../../store';
import { bidComparator, technicalBids, trickBids } from '../../utils';

const bidSelector = (state: RootState) => state.bidding;

export const bidsSelector = createSelector(bidSelector, ({ bids }) => bids);

export const dealer = createSelector(bidSelector, (bidding) => bidding.dealer);

export const lastBid = createSelector(bidsSelector, (bids) => last(bids));

export const lastTrickBid = createSelector(
  bidsSelector,
  (bids) => last(bids.filter((bid) => includes(trickBids, bid))) || '',
);

export const active = createSelector(bidSelector, (bidding) => bidding.active);

export const enabled = createSelector(bidSelector, (bidding) => bidding.enabled);

export const isDoubled = createSelector(bidsSelector, (bids) => {
  let doubled = false;
  bids.forEach((bid) => {
    if (doubled && !includes(['Pass', 'X'], bid)) {
      doubled = false;
    }
    if (bid === 'X') {
      doubled = true;
    }
  });
  return doubled;
});

export const isReboubled = createSelector(bidsSelector, (bids) => {
  let doubled = false;
  let redoubled = false;
  bids.forEach((bid) => {
    if (doubled && bid === 'XX') {
      redoubled = true;
      doubled = false;
    }
    if (redoubled && !includes(['Pass', 'XX'], bid)) {
      redoubled = false;
    }
    if (doubled && !includes(['Pass', 'X'], bid)) {
      doubled = false;
    }
    if (bid === 'X') {
      doubled = true;
    }
  });
  return redoubled;
});

export const canBeDoubled = createSelector(
  bidsSelector,
  isDoubled,
  isReboubled,
  (bids, _isDoubled, _isRedoubled) => {
    let beDoubled = false;
    if (!_isDoubled && !_isRedoubled) {
      bids.forEach((bid) => {
        if (bid === 'Pass') {
          beDoubled = false;
        }
        if (bid !== 'Pass') {
          beDoubled = true;
        }
      });
    }
    return beDoubled;
  },
);

export const enabledBidsSelectors = createSelector(
  bidsSelector,
  lastTrickBid,
  canBeDoubled,
  isDoubled,
  isReboubled,
  (_bids, _lastTrickBid, _canBeDoubled, _isDoubled, _isRedoubled) => {
    const enabledBids = ['Pass'];
    if (_canBeDoubled) {
      enabledBids.push('X');
    }
    if (_isDoubled && !_isRedoubled) {
      enabledBids.push('XX');
    }

    const remainingTrickBids = _bids.filter((bid) => !includes(technicalBids, bid));
    if (remainingTrickBids.length === 0) {
      trickBids.forEach((bid: string) => enabledBids.push(bid));
    } else {
      trickBids.filter(
        (bid: string) => bidComparator(bid, _lastTrickBid) > 0,
      ).forEach((bid: string) => enabledBids.push(bid));
    }
    return enabledBids;
  },
);
