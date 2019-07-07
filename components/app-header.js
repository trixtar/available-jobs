import React from 'react';
// import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'sticky',
  },
  appTitle: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1) * -1,
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.appTitle} variant='h5' component='h1'>IT Jobs</Typography>
        <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
