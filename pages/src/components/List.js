import React, { useEffect } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {
  Fab,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'
import Item from "./ListItem";


const ListComponent = (props) => {  
  useEffect(() => {
    props.getList()
  }, []);

  const { list: posts, loading } = useSelector(state => state);

return (<List >
    <ListSubheader style={{background: "white"}} component="div" id="nested-list-subheader">
      Posts
    </ListSubheader>
    { loading && <CircularProgress color="secondary" style={{marginLeft: "50%"}} /> }
    { posts.map(post => <Item post={post}/>)} 
  </List>
)};
export default ListComponent;