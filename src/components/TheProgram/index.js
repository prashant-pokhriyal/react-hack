import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './index.css';

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

const getContent = () => {
  return `
    function reverse(a) {
      let string = input.split('');
      let i = 0;
      let j = string.length - 1;
      while (i < j) {
        if (!/[a-zA-Z]/.test(string[i])) {
          ++i; continue;
        }
        if (!/[a-zA-Z]/.test(string[j])) {
          --j; continue;
        }
        let temp = string[i];
        string[i] = string[j];
        string[j] = temp;
        ++i; --j;
      }
    
      return string.join('');
    }
  `;
};

const program = (input) => {
  let string = input.split('');
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (!/[a-zA-Z]/.test(string[i])) {
      ++i; continue;
    }
    if (!/[a-zA-Z]/.test(string[j])) {
      --j; continue;
    }
    let temp = string[i];
    string[i] = string[j];
    string[j] = temp;
    ++i; --j;
  }

  return string.join('');
};

function TheProgram() {
  const classes = useStyles();
  const [state, setState] = useState({
    input: '',
    output: '',
    content: getContent(),
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, output: program(e.target.value) });
  };

  return (
    <Grid container spacing={1} direction="row" justify="center">
      <Grid item lg={8} sm={8} md={8} xs={12}>
        <SyntaxHighlighter language="javascript">
          {state.content}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Paper className={classes.paper} elevation="0">
            <TextField
              id="outlined-multiline-static"
              label="Input"
              multiline
              fullWidth
              rows={1}
              variant="outlined"
              name="input"
              onChange={handleChange}
            />
          </Paper>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Paper className={classes.paper} elevation="0">
            <TextField
              id="outlined-multiline-static"
              label="Output"
              multiline
              inputProps={{
                readOnly: true,
                disabled: true
              }}
              fullWidth
              rows={1}
              value={state.output}
              variant="outlined"
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TheProgram;