import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
import {Color} from '../../constant/color';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '60%',
    margin: '0 auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FeedbackForm(props) {
  const classes = useStyles();
  const {type, color} = props.selectedCard;
  const [videoQuality, setVideoQuality] = React.useState(false);
  const [audioQuality, setAudioQuality] = React.useState(false);
  const [ease, setEase] = React.useState(false);
  const [look, setLook] = React.useState(false);
  const [student, setStudent] = React.useState(false);
  const [detail, setDetail] = React.useState('');

  return (
      <div className={classes.root}>
        <h1>Oh. oh!</h1>
        <h2>What should we work on for your next class?</h2>
        <p>Select all that apply.</p>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper
                className={classes.paper}
                style={{
                  backgroundColor: videoQuality ? Color.white : color,
                  color: videoQuality ? Color.lightgray : Color.white
                }}
                onClick={() => setVideoQuality(!videoQuality)}
            >Video Quality</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
                className={classes.paper}
                style={{
                  backgroundColor: audioQuality ? Color.white : color,
                  color: audioQuality ? Color.lightgray : Color.white
                }}
                onClick={() => setAudioQuality(!audioQuality)}
            >Audio Quality</Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper
                className={classes.paper}
                style={{
                  backgroundColor: ease ? Color.white : color,
                  color: ease ? Color.lightgray : Color.white
                }}
                onClick={() => setEase(!ease)}
            >Ease of use</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
                className={classes.paper}
                style={{
                  backgroundColor: look ? Color.white : color,
                  color: look ? Color.lightgray : Color.white
                }}
                onClick={() => setLook(!look)}
            >Look & Feel</Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper
                className={classes.paper}
                style={{
                  backgroundColor: student ? Color.white : color,
                  color: student ? Color.lightgray : Color.white
                }}
                onClick={() => setStudent(!student)}
            >Student Participation</Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{backgroundColor: color}}>
              <TextareaAutosize
                  style={{width: '100%'}}
                  value={detail}
                  onChange={e => setDetail(e.target.value)}
                  aria-label="minimum height"
                  rowsMin={3}
                  placeholder="Please tell us more"/>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
                variant="outlined"
                style={{width: '100%', height: 55, color: Color.white}}
                onClick={() => props.onResetRating()}
            >Change Rating</Button>
          </Grid>
          <Grid item xs={6}>
            <Button
                variant="contained"
                style={{width: '100%', backgroundColor: Color.white, height: 55, color: Color.lightgray}}>Submit</Button>
          </Grid>
        </Grid>
      </div>
  )
}