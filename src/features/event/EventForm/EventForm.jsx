import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';


const mapStateToProps = (state, ownProps) => {
  // get event id from route params
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  if (eventId && state.events.length > 0) {
    // get the current event from store
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {

  // state
  state = {
    event: Object.assign({}, this.props.event)
  }

  // lifecycle methods



  // custom methods
  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      // redirect back to event detailed page
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
      this.props.createEvent(newEvent);
      // redirect to events
      this.props.history.push('/events');
    }
  }

  onInputChanged = (e) => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;

    this.setState({
      event: newEvent
    });
  }

  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title"
              onChange={this.onInputChanged}
              value={event.title} placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date"
              onChange={this.onInputChanged}
              value={event.date} type="date" placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city"
              onChange={this.onInputChanged}
              value={event.city} placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue"
              onChange={this.onInputChanged}
              value={event.venue} placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy"
              onChange={this.onInputChanged}
              value={event.hostedBy} placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
                </Button>
          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default connect(mapStateToProps, actions)(EventForm);