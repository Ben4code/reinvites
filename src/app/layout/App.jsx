import React, { Component } from 'react';
import EventDashboard from '../features/events/EventDashboard/EventDashboard'
import NavBar from '../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react';


export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </>
    )
  }
}
