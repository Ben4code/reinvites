import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'



const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

export default class EventDashboard extends Component {
  state = {
    events: events,
    isOpen: false,
    selectedEvent: null
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  }
  handleSelectEvent = (event) => {
    this.setState(()=> ({
      selectedEvent: event,
      isOpen: true
    }));
  }

  handleCreatEvents =(newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = './assets/user.png';
    this.setState((prevState) => {
      return {
        events: [...prevState.events, newEvent],
        isOpen: false
      };
    });
  }

  handleUpdateEvent = (updatedEvent) => {
    this.setState(({events})=> {
      return {
        events: events.map((event) => event.id === updatedEvent.id ? {...updatedEvent} : event),
        isOpen: false
      }
    })
  }

  handleDeleteEvent = (deleteId) => {
    this.setState(({events})=> {
      return {
        events: events.filter((event) => event.id !== deleteId),
        isOpen: false
      }
    })
  }


    render() {
      const {events, isOpen, selectedEvent} = this.state;
        return (
            <div>
                <Grid>
                    <GridColumn width={10}>
                        
                        <EventList events={events} selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent}/>

                    </GridColumn>
                    <GridColumn width={6}>
                        
                        <Button onClick={this.handleCreateFormOpen} positive content="Create Events"/>
                       
                        { 
                          //Using the key to re-render the form anytime the selectedEvent obj changes or is null.
                          isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} 
                          selectedEvent= {selectedEvent} cancelFormOpen= {this.handleFormCancel} 
                          creatEvents= {this.handleCreatEvents} updateEvent={this.handleUpdateEvent}/> 
                        }
                    </GridColumn> 
                </Grid>
            </div>
        )
    }
}
