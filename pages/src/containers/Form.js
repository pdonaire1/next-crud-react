import React from 'react';
import { connect } from 'react-redux';
import { sendPost } from '../actions';
import Form from '../components/Form';
const mapDispatchToProps = {
    sendPost,
};
const FormContainer = connect(null,mapDispatchToProps)(Form);
export default FormContainer;