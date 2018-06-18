import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import ExpenseDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <ExpenseDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
