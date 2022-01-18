import { makeStyles } from '@material-ui/core';
import { includes } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { possibleBids } from '../../utils';
import { actions } from './reducer';
import { bidsSelector, enabledBidsSelectors } from './selectors';

interface IBiddingProps {
  enabled: boolean;
}

const useStyles = makeStyles({
  container: {
    gridRowStart: 'c',
    gridColumnStart: 'c',
    border: '1px solid #8d8d8d',
    borderRadius: 5,
    padding: 10,
    margin: '5px auto 5px auto',
    minWidth: '400px',
  },
  header: {
    margin: '2%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: '30px repeat(auto-fill, 20px)',
    gridGap: '1px 5px',
    overflowY: 'auto',
    height: '130px',
    '&>div': {
      height: '30px',
      fontWeight: 'bold',
      fontSize: '18px',
    },
  },
  separator: {
    width: '90%',
    height: '5px',
    backgroundColor: 'black',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: 'black',
    margin: '5px auto 5px auto',
  },
  disabled: {
    display: 'none',
  },
  buttons: {
    display: 'grid',
    margin: '5%',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '15px',
    height: '200px',
    overflowY: 'auto',
  },
  button: {
    height: '40px',
    fontSize: '18px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:disabled': {
      borderColor: 'gray',
    },
  },
  newRow: {
    gridColumnStart: '1',
  },
  logs: {
    height: 30,
  },
});

const Bidding = ({ enabled }: IBiddingProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const bids = useSelector(bidsSelector);
  const enabledBids = useSelector(enabledBidsSelectors);

  const handleButtonClick = React.useCallback((event) => {
    const bid = event.target.id;
    if (!includes(enabledBids, bid)) return;
    dispatch(actions.placeBid(bid));
  }, [enabledBids]);

  const logs = bids.map((bid: string) => (
    <div key={bid} className={classes.logs}>
      {bid}
    </div>
  ));

  const header = (
    <div className={classes.header}>
      <div>North</div>
      <div>East</div>
      <div>South</div>
      <div>West</div>
      {logs}
    </div>
  );

  const buttons = (
    <div className={classes.buttons}>
      {possibleBids.map((bid: string, index: number) => {
        const isEnabled = includes(enabledBids, bid);
        return (
          <button
            key={bid}
            id={bid}
            type="button"
            disabled={!isEnabled}
            className={`${classes.button} ${index === 3 ? classes.newRow : ''}`}
            onClick={handleButtonClick}
          >
            {bid}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className={`${classes.container} ${enabled ? '' : classes.disabled}`}>
      {header}
      {buttons}
    </div>
  );
};

export default Bidding;
