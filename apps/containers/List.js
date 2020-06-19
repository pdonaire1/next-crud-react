import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import List from '../components/List';

const mapStateToProps = state => ({
    state: state.app
});

const mapDispatchToProps = {
    getList: actions.getList,
};
export default connect(mapStateToProps, mapDispatchToProps)(List);