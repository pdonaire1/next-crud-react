import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions';
import List from '../components/List';
const mapDispatchToProps = {
   getList: getList,
};
const ListContainer = connect(null,mapDispatchToProps)(List);
export default ListContainer;