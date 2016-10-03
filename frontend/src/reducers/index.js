import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import events from 'reducers/events'
import eventDetails from 'reducers/event-details'
import eventsFilters from 'reducers/events-filters'
import xhrStatus from 'reducers/xhr-status'
import flashMessages from 'reducers/flash-messages'

export default combineReducers({
  xhrStatus,
  flashMessages,
  eventsFilters,
  eventDetails,
  events,

  routing: routerReducer
})