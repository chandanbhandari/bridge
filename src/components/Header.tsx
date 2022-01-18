import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions as gameActions } from '../containers/GamePlay/reducer';
import { actions as biddingActions } from '../containers/Bidding/reducer';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  button: {
    background: 'white',
    cursor: 'pointer',
    ':hover': {
      background: '#fafafa',
    },
  },
});

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRestart = useCallback(() => {
    dispatch(biddingActions.reset());
    dispatch(gameActions.deal('east'));
  }, [dispatch]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Bridge Game
        </Typography>
        <Button variant='outlined' type='button' className={classes.button} onClick={handleRestart}>Restart</Button>
      </Toolbar>
    </AppBar>
  );
};
