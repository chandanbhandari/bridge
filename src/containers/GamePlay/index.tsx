import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bidding from '../Bidding';
import Players from '../Players';
import {
  useEastStyles,
  useNorthStyles,
  useSouthStyles,
  useWestStyles,
} from '../Players/styles';
import { actions } from './reducer';
import {
  eastPlayerDataSelector,
  northPlayerDataSelector,
  southPlayerDataSelector,
  westPlayerDataSelector,
} from './selectors';

const useStyles = makeStyles({
  board: {
    height: 600,
    display: 'grid',
    grid: `"w n e" 30%
        "w c e" auto
        "w s e" 30%
      / 20% auto 20%`,
  },
});

function GamePlay() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.deal('east'));
  }, []);

  const northCards = useSelector(northPlayerDataSelector);
  const westCards = useSelector(westPlayerDataSelector);
  const eastCards = useSelector(eastPlayerDataSelector);
  const southCards = useSelector(southPlayerDataSelector);

  return (
    <div className={classes.board}>
      <Players cards={westCards} title="west" styles={useWestStyles} className="placeDown" />
      <Players cards={northCards} title="north" styles={useNorthStyles} className="placeRight" />
      <Bidding enabled />
      <Players cards={eastCards} title="east" styles={useEastStyles} className="placeDown" />
      <Players cards={southCards} title="south" styles={useSouthStyles} className="placeRight" />
    </div>
  );
}

export default GamePlay;
