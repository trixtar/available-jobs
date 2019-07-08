import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Link from 'next/link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardContent: {
    flexGrow: 1,
    paddingTop: 0,
  },
  icon: {
    fontSize: 24,
    color: theme.palette.secondary.dark,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 500,
    verticalAlign: 'text-bottom',
    color: theme.palette.primary.dark,
  },
}));

const JobsGridItem = (props) => {
  const classes = useStyles();
  const [raised, isRaised] = useState(false);

  const toggleRaised = () => isRaised(!raised);

  return (
    <Grid item xs={12} md={6} xl={4}>
      <Link href={`/job?id=${props.job.id}`}>
        <Card className={classes.card} raised={raised} onMouseOver={toggleRaised} onMouseOut={toggleRaised}>
          <CardHeader
            className={classes.cardHeader}
            avatar={<WorkIcon className={classes.icon} />}
            title={<span className={classes.jobTitle}>{props.job.title}</span>}
          />
          <CardContent className={classes.cardContent}>
            <p>Company: {props.job.company}</p>
            <p>Description: {props.job.description}</p>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
};

export default JobsGridItem;