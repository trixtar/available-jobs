import {Fragment} from 'react';
import {useRouter} from 'next/router';
import Head from '../components/head';
import Layout from '../components/layout.js';
import allJobs from '../data/jobs.json';

const Job = () => {
  const router = useRouter();
  const job = allJobs[router.query.id - 1];
  console.log('job', job);

  return (
    <Fragment>
      <Head title={`Available Jobs - ${job.title}`} /> 
      <Layout>
        {router.query.id}
      </Layout>
    </Fragment>
  );
};

export default Job;