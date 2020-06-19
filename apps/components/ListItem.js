import React, { useEffect } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import {
  Fab,
  ListItem,
  ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { deletePost, editPost } from '../../redux/actions';


const ListItemComponent = (props) => {
  const { post } = props;
  return (<ListItem key={post.id}>
    <ListItemText primary={post.title} secondary={post.body} />
    <Fab color="primary" style={{minWidth: "55px"}} >
      <EditIcon onClick={() => props.editPost(post)} />
    </Fab>
    <span style={{padding: "2px"}}></span>
    <Fab color="secondary" style={{minWidth: "55px"}} >
      <DeleteOutlinedIcon onClick={() => props.deletePost(post.id)} />
    </Fab>
  </ListItem>)
};

export default ListItemComponent;