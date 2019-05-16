import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

export default createMuiTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primaryColor,
      dark: colors.primaryDark,
      contrastText: '#000',
    },
    secondary: {
      light: colors.secondaryLight,
      main: colors.secondaryColor,
      dark: colors.secondaryDark,
      contrastText: '#000',
    },
    error: {
      light: colors.errorLight,
      main: colors.errorColor,
      dark: colors.errorDark,
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
  fontFamily: 'Calibri, Univers LT Std, sans-serif',
});
