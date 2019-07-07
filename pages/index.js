import React, {Fragment} from 'react';
import Link from 'next/link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Head from '../components/head';
import AppHeader from '../components/app-header';

const Home = () => (
  <Fragment>
    <CssBaseline />
    <div>
      <Head title="Available jobs" />
      <AppHeader />
      <Container>
      </Container>
    </div>
  </Fragment>
);

export default Home;
