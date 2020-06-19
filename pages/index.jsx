import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import App from '../apps/App';

class MyApp extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        const { props } = this;
        return (
            <div>
                <div>Crud App with NextJs, React, Redux, Sagas, Material by @pdonaire1</div>
                <App {...props}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.app
});

const mapDispatchToProps = {
    ...actions
};
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);

