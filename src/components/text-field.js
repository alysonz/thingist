import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const StyledTextField = withStyles({
  root: {
    width: '190px',
    height: '75%',
    backgroundColor: '#fff',
    color: '#000',
    boxShadow: '-1px -1px 1px #d8d8d8',
    border: '.5px solid #d8d8d8',
    borderRadius: '1px',
    margin: '1rem',
    textIndent: '.5rem',
  },
})(TextField);

export default StyledTextField;
