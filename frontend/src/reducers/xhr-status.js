import {
  REQUEST_SEARCH_RESULTS,
  RECEIVE_SEARCH_RESULTS,
  REQUEST_SEARCH_RESULTS_FAILED,
  LOAD_MORE_SEARCH_RESULTS,
  TRIGGER_SEARCH,
  REQUEST_EVENT_RETRY,
  RECEIVE_EVENT_RETRY,
  REQUEST_EVENT_RETRY_FAILED,
  REQUEST_EVENT_DETAILS,
  RECEIVE_EVENT_DETAILS
} from 'actions'

const initialState = {
  isFetchingEvents: false,
  isRetryingEvent: false,
  isFetchingEventDetails: false,
  currentEventsOffset: 0,
  lastEventsLoadSize: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_SEARCH:
      return Object.assign({}, state, {
        currentEventsOffset: 0,
        lastEventsLoadSize: 0
      })

    case REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetchingEvents: true
      })

    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetchingEvents: false,
        lastEventsLoadSize: action.events.length
      })

    case REQUEST_SEARCH_RESULTS_FAILED:
      return Object.assign({}, state, {
        isFetchingEvents: false
      })

    case LOAD_MORE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        currentEventsOffset: action.offset
      })

    case REQUEST_EVENT_RETRY:
      return Object.assign({}, state, {
        isRetryingEvent: true
      })

    case RECEIVE_EVENT_RETRY:
    case REQUEST_EVENT_RETRY_FAILED:
      return Object.assign({}, state, {
        isRetryingEvent: false
      })

    case REQUEST_EVENT_DETAILS:
      return Object.assign({}, state, {
        isFetchingEventDetails: true
      })

    case RECEIVE_EVENT_DETAILS:
      return Object.assign({}, state, {
        isFetchingEventDetails: false
      })

    default:
      return state
  }
}