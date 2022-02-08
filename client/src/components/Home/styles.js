import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.down('s')]: {
      flexDirection: 'column-reverse',
    },
  },
}));