import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import ListItem from '../components/ListItem';

const mapStateToProps = state => ({
    state: state.app
});

const mapDispatchToProps = {
    ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);