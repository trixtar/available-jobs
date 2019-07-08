import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo';

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: '2.4rem',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  appBar: {
    position: 'sticky',
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link href='/'>
          <Logo className={classes.logo} />
        </Link>
        <Typography variant='h5' component='h1'>IT Jobs</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
