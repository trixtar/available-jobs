import {Fragment, useState} from 'react';
import {useRouter} from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Head from '../components/head';
import Layout from '../components/layout.js';
import allJobs from '../data/jobs.json';

const useStyles = makeStyles(theme => ({
  layout: {
    '& > * + *': {
      marginTop: 32,
    },
    '& > button:last-child': {
      marginTop: 20,
    }
  },
  jobTitle: {
    color: theme.palette.primary.dark,
  },
  company: {
    marginTop: 8,
    fontSize: 18,
    color: theme.palette.secondary.dark,
  },
  subsection: {
    fontSize: 16,
    '& > p:first-child': {
      color: theme.palette.secondary.dark,
      '& > span': {
        color: theme.palette.grey['900'],
      }
    },
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    maxWidth: '75vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    fontSize: 24,
    color: theme.palette.primary.main,
  },
}))

const getEmploymentType = job => {
  switch (job.employment_type) {
    case 'full_time':
      return <p>Full Time</p>
    case 'part_time':
      return <p>Part Time</p>
    case 'freelance':
      return <p>Freelance</p>
    case 'contract':
      return <p>Contract: <span>{job.contract_type}</span></p>
    default:
      null
  };
}

const Job = () => {
  const router = useRouter();
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const job = allJobs[router.query.id - 1];
  const {title, company, description, employment_type} = job;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Head title={`Available Jobs - ${job.title}`} /> 
      <Layout>
        <Box className={styles.layout}>
          <div>
            <Typography className={styles.jobTitle} variant='h5'>{title}</Typography>
            <p className={styles.company}>{company}</p>   
          </div> 
          <div className={styles.subsection}>
            <p>Job Description</p>
            <p>{description}</p>
          </div>
          <div className={styles.subsection}>{getEmploymentType(job)}</div>
          <Button variant="contained" color="primary" onClick={handleOpen}>Apply</Button>
        </Box>
        <Modal open={open} onClose={handleClose} className={styles.modalContainer}>
          <PersuasiveModal />
        </Modal>
      </Layout>
    </Fragment>
  );
};

const PersuasiveModal = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.modal}>
      To unlock further content, hire me :)
    </Paper>
  );
}

export default Job;