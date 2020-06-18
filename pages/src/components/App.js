import React from 'react';
import List from '../containers/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Form from '../containers/Form';
let App = () => (
  <div>
    <Container maxWidth="sm">
      <Form />
      <Divider />
      <List />
    </Container>
  </div>
);
export default App;