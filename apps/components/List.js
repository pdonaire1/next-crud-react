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
import Item from "../containers/ListItem";
import { getList } from '../../redux/actions';
import { useDispatch } from 'react-redux'

class ListComponent extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
      super(props);
      this.state = {
      }
      props.getList();
  }
  render(){
    const { list: posts, loading } = this.props.state;
    return (<List >
      <ListSubheader style={{background: "white"}} component="div" id="nested-list-subheader">
        Posts
      </ListSubheader>
      { loading && <CircularProgress color="secondary" style={{marginLeft: "50%"}} /> }
      { posts && posts.map(post => <Item post={post} key={post.id} />)} 
    </List>);
  }
}
/*
const ListComponent = (props) => {  
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("effect")
    //dispatch(getList())
    props.getList();
  }, []);

  const { list: posts, loading } = useSelector(state => state);
  //const { list: posts, loading } = props.state;
  return (<List >
    <ListSubheader style={{background: "white"}} component="div" id="nested-list-subheader">
      Posts
    </ListSubheader>
    { loading && <CircularProgress color="secondary" style={{marginLeft: "50%"}} /> }
    { posts && posts.map(post => <Item post={post} key={post.id} />)} 
  </List>
)};*/
export default ListComponent;