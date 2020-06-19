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
import { requestEditPost, sendPost } from '../../redux/actions';

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const initialForm = { id: "", title: "", body: "" };

class ListComponent extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
      super(props);
      this.state = {message: "", form: initialForm};
      props.getList();
  }

  componentDidUpdate(props, state) {
    const { form } = this.state;
    const { form: stateForm } = this.props.state;
    if (stateForm && stateForm.id != form.id){
      return this.setState({form: stateForm});
    }
  }
  handleClose = () => {
    this.setState({ message: "" });
  };

  handleCreate = () => {
    const { form } = this.state;
    if (!form.title || !form.body) {
      this.setState({ message: "Invalid form" });
      return;
    };
    if (!form.id) this.props.sendPost(form)
    else this.props.requestEditPost(form)
    this.setState(initialForm);
  }
  handleClear = () => {
    this.setState({ form: initialForm });
    this.props.editPost({title: "", body: ""});
  }
  
  render(){
    const { message, form } = this.state || initialForm;
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
          onClose={this.handleClose}
          autoHideDuration={2000}
          TransitionComponent={TransitionDown}
          message={message}
        />
        <ListItem>
          <Grid container spacing={0} alignItems="center" justify="center" >
            <Card >
              <CardContent >
                <TextField 
                  onChange={e => this.setState({form: {...form, title: e.target.value}}) }
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
                    onChange={e => this.setState({form: {...form, body: e.target.value}}) }
                  />
              </CardContent>
              <CardActions>
                <Button onClick={() => this.handleCreate()}
                  style={{width: "100%"}} variant="outlined" color="primary" disableElevation>
                  { !form.id ? 'Add new Post' : 'Update Post' }
                </Button>
                <Button onClick={() => this.handleClear()}
                  style={{width: "100%"}} variant="outlined" color="secondary" disableElevation>
                  Clear form
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </ListItem>
      </List>);
  };
}
export default ListComponent;