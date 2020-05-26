import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid, Paper, Typography, Divider } from '@material-ui/core';
import ColorPicker from '../ColorPicker';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Controls(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    ...props.data,
  });

  const patterns = [
    'grid',
    'checker',
    'odd',
  ];

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    props.onChange(e);
  };

  return (
    <div>
      <Grid container spacing={1} direction="row" justify="center">
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'stretch' }}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h4" component="h4">Board</Typography>
            <Divider></Divider>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.width}
                onChange={handleChange}
                required
                type="number"
                id="width"
                label="Width"
                name="width"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.height}
                onChange={handleChange}
                required
                type="number"
                id="height"
                label="Height"
                name="height"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.cols}
                onChange={handleChange}
                required
                type="number"
                id="cols"
                label="Columns"
                name="cols"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.rows}
                onChange={handleChange}
                required
                type="number"
                id="rows"
                label="Rows"
                name="rows"
              />
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="pattern" id="pattern">Pattern</InputLabel>
              <Select
                labelId="pattern"
                value={state.pattern}
                onChange={handleChange}
                inputProps={{
                  name: 'pattern',
                  label: 'Pattern',
                  id: 'pattern',
                }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  }
                }}
              >{patterns.map(pattern => <MenuItem key={pattern} value={pattern}>{pattern}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <ColorPicker labelId="boardColor" name="boardColor" value={state.boardColor} onChange={handleChange} id="boardColor"></ColorPicker>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'stretch' }}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h4" component="h4" alignItems="auto">Shape</Typography>
            <Divider></Divider>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.radius}
                onChange={handleChange}
                required
                type="number"
                id="radius"
                label="Radius"
                name="radius"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <ColorPicker name="shapeColor1" value={state.shapeColor1} onChange={handleChange} id="shapeColor1"></ColorPicker>
            </FormControl>
            <FormControl className={classes.formControl}>
              <ColorPicker name="shapeColor2" value={state.shapeColor2} onChange={handleChange} id="shapeColor2"></ColorPicker>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Controls;