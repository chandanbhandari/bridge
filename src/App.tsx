import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import GamePlay from './containers/GamePlay';
import { store } from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Wrapper>
        <GamePlay />
      </Wrapper>
    </MuiThemeProvider>
  </Provider>
);

export default App;
