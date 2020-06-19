import React from 'react';
import List from './containers/List';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Form from './containers/Form';
import {connect} from 'react-redux';
class App extends React.Component {
  static getInitialProps({store}) {}

  constructor(props) {
      super(props);
  }
  render(){
    const { props } = this.props;
    return (<div>
      <Container maxWidth="sm">
        <Form  />
        <Divider />
        <List />
      </Container>
    </div>);
  }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  
};
export default connect(mapStateToProps, mapDispatchToProps)(App);