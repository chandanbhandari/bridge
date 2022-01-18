import { makeStyles } from '@material-ui/core';

export const useEastStyles = makeStyles({
  container: {
    gridColumn: 'e',
    gridRow: 'span 3',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: '20px 20px 20px 20px',
    height: '80%',
  },
  play: {
    margin: '0 0 0 0',
    zIndex: 1,
    width: '80px',
    alignSelf: 'center',
  },
  title: {
    height: '100%',
    width: '40px',
    backgroundColor: '#273142',
    margin: '10px 0 10px -10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    margin: '25px 5px 25px 5px',
    fontSize: '18px',
  },
  column: {
    display: 'inline-block',
  },
});

export const useWestStyles = makeStyles({
  container: {
    gridColumn: 'w',
    gridRow: 'span 3',
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    margin: '20px 20px 20px 20px',
    height: '80%',
    justifyContent: 'flex-end',
  },
  play: {
    margin: '0 0 0 0',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  title: {
    backgroundColor: '#273142',
    borderRadius: 5,
    color: 'white',
    height: '100%',
    width: '40px',
    margin: '10px -10px 0 0',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    margin: '25px 5px 25px 5px',
    fontSize: '18px',
  },
});

export const useNorthStyles = makeStyles({
  container: {
    gridColumn: 'n',
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'nowrap',
  },
  play: {
    margin: '0px 60px 0 60px',
    alignSelf: 'center',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  title: {
    backgroundColor: '#273142',
    borderRadius: 5,
    color: 'white',
    height: '40px',
    margin: '-10px 10px 0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    margin: '5px 0px 5px 25px',
    fontSize: '18px',
  },
});

export const useSouthStyles = makeStyles({
  container: {
    gridColumn: 's',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    margin: '5px',
  },
  play: {
    margin: '0px 60px 0 60px',
    display: 'flex',
    zIndex: 1,
    flexWrap: 'nowrap',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  title: {
    backgroundColor: '#273142',
    borderRadius: 5,
    color: 'white',
    height: '40px',
    margin: '0 10px -10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    margin: '5px 0px 5px 25px',
    fontSize: '18px',
  },
});
