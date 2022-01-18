import { makeStyles } from '@material-ui/core';
import React from 'react';
import { colorMap } from '../utils';

const useStyles = makeStyles({
  card: {
    height: 120,
    width: 80,
    backgroundColor: 'white',
    border: '1px solid #adadad',
    borderRadius: 5,
    display: 'inline-block',
  },
  red: { color: 'red' },
  black: { color: 'black' },
  cardLeft: { width: 35, float: 'left' },
  cardRight: { width: 35, float: 'right' },
  rank: { fontSize: 24, margin: '5% 0 5% 10%' },
  smallSuit: { fontSize: 22, margin: '5% 5% 5% 20px' },
  largeSuit: { fontSize: 48, margin: '80% 0 0 7%' },
  placeRight: { marginLeft: '-50px' },
  placeDown: { marginTop: '-80px' },
});

type Suit = 'red' | 'black';

interface CardProps {
  rank: string;
  suit: Suit;
  className: string;
}

function Card({ rank, suit, className }: CardProps) {
  const classes = useStyles();
  return (
    // @ts-expect-error
    <div className={`${classes.card} ${classes[colorMap[suit]]} ${classes[className]}`}>
      <div className={classes.cardLeft}>
        <div className={classes.rank}>{rank}</div>
        <div className={classes.largeSuit}>{suit}</div>
      </div>
      <div className={classes.cardRight}>
        <div className={classes.smallSuit}>{suit}</div>
      </div>
    </div>
  );
}

export default Card;
