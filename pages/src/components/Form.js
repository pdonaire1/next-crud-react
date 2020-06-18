import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Card from '@material-ui/core/Card';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Snackbar,
  Slide,
  Button,
  TextField,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  ListSubheader,
  ListItem
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux'
import { deletePost, editPost, requestEditPost } from '../actions';

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const initialForm = { title: "", body: "" };
const ListComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const { form: stateForm } = useSelector(state => state);
  if (stateForm.id != form.id){
    setForm(stateForm);
  }
  const handleCreate = () => {
    if (!form.title || !form.body) {
      setMessage("Invalid form");
      return;
    };
    if (!form.id) props.sendPost(form)
    else dispatch(requestEditPost(form))
    setForm(initialForm);
  }
  const handleClose = () => {
    setMessage("");
  };
  return (
    <List>
      <ListSubheader component="div" id="nested-list-subheader" style={{background: "white"}}>
        Posts system created by @pdonaire1
      </ListSubheader>
      <ListSubheader component="div" id="nested-list-subheader" style={{background: "white"}}>
        Post Form
      </ListSubheader>

      <Snackbar
        open={message != ""}
        onClose={handleClose}
        autoHideDuration={2000}
        TransitionComponent={TransitionDown}
        message={message}
      />

      <ListItem>
        <Grid container spacing={0} alignItems="center" justify="center" >
          <Card className={classes.root}>
            <CardContent >
              <TextField 
                onChange={e => setForm({...form, title: e.target.value}) }
                style={{width: "100%"}}
                id="outlined-basic" 
                label="Title" 
                value={form.title}/>
              <TextField
                  style = {{width: "100%"}}
                  id="outlined-multiline-static"
                  label="Body"
                  multiline
                  rows={4}
                  value={form.body}
                  onChange={e => setForm({...form, body: e.target.value}) }
                />
            </CardContent>
            <CardActions>
              <Button onClick={() => handleCreate()}
                style={{width: "100%"}} variant="outlined" color="primary" disableElevation>
                { !form.id ? 'Add new Post' : 'Update Post' }
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </ListItem>
    </List>
)};
export default ListComponent;