import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  icon: {
    //margin: theme.spacing(1),
    fontSize: 24,
  },
}));

const JobsGridItem = (props) => {
  console.log(props);
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} xl={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<WorkIcon className={classes.icon} />}
            title={props.job.title}
          />
          <CardContent className={classes.cardContent}>
            {props.job.description}
          </CardContent>
          <CardActions>
            <Button>Job details</Button>
          </CardActions>
        </Card>
    </Grid>
  )
};

export default JobsGridItem;