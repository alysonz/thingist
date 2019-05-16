import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import colors from '../lib/colors';

const StyledButton = withStyles({
  root: {
    width: '150px',
    backgroundColor: colors.secondaryColor,
    color: '#fff',
  },
  label: {
    fontSize: '1.5rem',
  },
})(Button);

export default StyledButton;
