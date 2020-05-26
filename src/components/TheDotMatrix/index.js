import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Board from '../Board';
import Controls from '../Controls';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TheDotMatrix() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    width: 200,
    height: 200,
    rows: 4,
    cols: 5,
    radius: 12.5,
    pattern: 'grid',
    boardColor: 'red',
    shapeColor1: 'black',
    shapeColor2: 'white'
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <Grid container spacing={1} direction="row" justify="center" alignItems="center">
      <Grid item lg={3} sm={5} md={4} xs={12}>
        <Paper className={classes.paper} elevation="0">
          <Controls onChange={handleChange} data={state}></Controls>
        </Paper>
      </Grid>
      <Grid item lg={9} sm={7} md={8} xs={12} style={{
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'scroll'
      }}>
        <Paper className={classes.paper} elevation="0">
          <Board {...state}></Board>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TheDotMatrix;
