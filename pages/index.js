import React, {Fragment} from 'react';
// import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Head from '../components/head';
import AppHeader from '../components/app-header';
import JobsGrid from '../components/jobs-grid';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 24,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div>
        <Head title="Available jobs" />
        <AppHeader />
        <Container className={classes.mainContainer}>
          <JobsGrid />
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
