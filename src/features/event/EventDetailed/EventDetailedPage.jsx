import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapStateToProps = (state, ownProps) => {
   // get event id from route params
   const eventId = ownProps.match.params.id;

   let event = {};

   if (eventId && state.events.length > 0) {
      // get the current event from store
      event = state.events.filter(event => event.id === eventId)[0];
   }

   return {
      event
   }
}

const EventDetailedPage = ({ event }) => {
   return (
      <Grid>
         <Grid.Column width={10}>
            <EventDetailedHeader event={event} />
            <EventDetailedInfo event={event} />
            <EventDetailedChat />
         </Grid.Column>
         <Grid.Column width={6}>
            <EventDetailedSidebar attendees={event.attendees} />
         </Grid.Column>
      </Grid>
   )
}

export default connect(mapStateToProps)(EventDetailedPage);
