import reducer from 'reducers'

describe('reducers', () => {
  it('without actions returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      xhrStatus: {
        isFetchingEvents: false,
        isRetryingEvent: false,
        isRetryingFailure: false,
        isDeletingFailure: false,
        isFetchingEventDetails: false,
        currentEventsOffset: 0,
        lastEventsLoadSize: 0
      },
      flashMessages: [],
      eventsFilters: { type: 'entity_id' },
      eventDetails: {},
      failureDetails: {},
      events: [],
      failures: [],
      routing: { locationBeforeTransitions: null }
    })
  })
})
