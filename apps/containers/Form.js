import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import Form from '../components/Form';

const mapStateToProps = state => ({
    state: state.app
});

const mapDispatchToProps = {
    ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);