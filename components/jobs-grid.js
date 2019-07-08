import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import JobsGridItem from './jobs-grid-item';
import allJobs from '../data/jobs.json';

export default class JobsGrid extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        {allJobs.map(job => (
          <JobsGridItem key={job.id} job={job} />
        ))}
      </Grid>
    )
  };
};