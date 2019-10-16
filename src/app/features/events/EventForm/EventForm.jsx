import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    state ={
        title: '', date: '', city: '', venue: '', hostedBy: ''
    }

    componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value})
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const {title, date, city, venue, hostedBy} = this.state;
        
        if(title === '' || date === '' || city === '' || venue === '' || hostedBy === '') return;

        
        if(this.state.id){
            this.props.updateEvent(this.state)
        }else{
            this.props.creatEvents(this.state);
        }
        
        this.setState({
            title: '', date: '', city: '', venue: '', hostedBy: '', 
        });
    }
    
    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hostedBy} = this.state;

        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input name="title" value={title}
                        onChange={this.handleChange} placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name="date" value={date}
                        onChange={this.handleChange} type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name="city" value={city}
                        onChange={this.handleChange} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name="venue" value={venue}
                        onChange={this.handleChange} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" value={hostedBy}
                        onChange={this.handleChange} placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                      </Button>
                    <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                </Form>
            </Segment>
        )
    }
}
