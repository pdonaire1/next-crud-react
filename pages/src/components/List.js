import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, ListSubheader, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'

const ListComponent = (props) => {
  useEffect(() => {
    props.getList()
  }, []);
  useEffect(() => console.log('mounted or updated'));
  const { list: posts, loading } = useSelector(state => state);
  return (<List >
    <ListSubheader style={{background: "white"}} component="div" id="nested-list-subheader">
      Posts
    </ListSubheader>
    { loading && <CircularProgress color="secondary" /> }
    { posts.map(todo => <ListItem key={todo.id}>
      <ListItemText primary={todo.title} secondary={todo.body} />
      </ListItem>)} 
  </List>
)};
export default ListComponent;