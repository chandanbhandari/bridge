import React from 'react';
import Card from '../../components/Card';

interface IPlayerProps {
  cards: any;
  title: string;
  styles: Function;
  className: string;
}

function Player({
  cards,
  title,
  styles,
  className,
}: IPlayerProps) {
  const classes = styles();
  const cardComponents = cards.map(({ rank, suit }: any, index: number) => (
    <Card key={`${suit}-${rank}`} rank={rank} suit={suit} className={index ? className : ''} />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span className={classes.label}>{title}</span>
      </div>
      <div className={classes.play}>{cardComponents}</div>
    </div>
  );
}

export default React.memo(Player);
