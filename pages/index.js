import {Fragment} from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import JobsGrid from '../components/jobs-grid';

const Home = () => (
  <Fragment>
    <Head title="Available jobs" />  
    <Layout>
      <JobsGrid />
    </Layout>
  </Fragment>
);

export default Home;
