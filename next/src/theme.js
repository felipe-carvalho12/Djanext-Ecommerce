import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A8534B',
    },
    secondary: {
      main: '#EC9D75',
    },
    tertiary: {
      main: '#F9D697',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9D697',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000000',
    }
  },
});

export default theme;