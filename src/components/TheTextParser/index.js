import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Card, CardMedia } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TheTextParser() {
  const classes = useStyles();
  const [state, setState] = useState({
    input: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const isValidURL = (url) => {
    var pattern = new RegExp('^(https?:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
  };

  const isImageURL = (url) => {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  };

  return (
    <div>
      <Grid container spacing={1} direction="row" justify="center" alignItems="center">
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Paper className={classes.paper} elevation="0">
            <TextField
              id="outlined-multiline-static"
              label="Input"
              multiline
              fullWidth
              rows={20}
              variant="outlined"
              name="input"
              onChange={handleChange}
            />
          </Paper>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={12}>
          <Paper className={classes.paper} elevation="0">
            {!isValidURL(state.input) && !isImageURL(state.input) && <TextField
              id="outlined-multiline-static"
              label="Output"
              multiline
              inputProps={{
                readOnly: true,
                disabled: true
              }}
              fullWidth
              rows={20}
              value={state.input}
              variant="outlined"
            />}
            {isValidURL(state.input) && !isImageURL(state.input) && <a href={state.input}>{state.input}</a>}
            {isValidURL(state.input) && isImageURL(state.input) && <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                component="img"
                height="140"
                src={state.input}
                title="Image"
              />
            </Card>}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TheTextParser;