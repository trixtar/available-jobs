import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppHeader from './app-header';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingTop: 24,
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppHeader />
      <Container className={classes.mainContainer}>
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;