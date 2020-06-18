import React, { useEffect } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import {
  Fab,
  ListItem,
  ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { deletePost, editPost } from '../actions';
const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    minWidth: "55px",
  },
}));

const ListItemComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { post } = props;
  return (<ListItem key={post.id}>
    <ListItemText primary={post.title} secondary={post.body} />
    <Fab color="primary"  className={classes.extendedIcon}>
      <EditIcon onClick={() => dispatch(editPost(post))} />
    </Fab>
    <span style={{padding: "2px"}}></span>
    <Fab color="secondary"  className={classes.extendedIcon}>
      <DeleteOutlinedIcon onClick={() => dispatch(deletePost(post.id))} />
    </Fab>
  </ListItem>)
};

export default ListItemComponent;