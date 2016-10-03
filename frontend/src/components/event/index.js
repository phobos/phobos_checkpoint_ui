import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { showEventOverview } from 'actions/event-overview'
import style from 'components/event/style'

import {Card, CardHeader, CardTitle} from 'material-ui/Card'
import EventOverviewDialog from 'components/event-overview-dialog'
import EventRetryDialog from 'components/event-retry-dialog'

const EVENT_TIME_FORMAT = 'MMMM Do YYYY, h:mm:ss a'
const EMPTY_EVENT_TYPE = '<no type>'

export function formattedEventTime (eventTime) {
  if (!eventTime) return null
  const eventTimeDate = new Date(eventTime)
  return moment(eventTimeDate).format(EVENT_TIME_FORMAT)
}

export class Event extends Component {
  static get propTypes () {
    return {
      onShowOverview: PropTypes.func,
      event: PropTypes.shape({
        id: PropTypes.number,
        group_id: PropTypes.string,
        topic: PropTypes.string,
        entity_id: PropTypes.string,
        event_type: PropTypes.string,
        event_time: PropTypes.string,
        event_version: PropTypes.string,
        checksum: PropTypes.string,
        payload: PropTypes.string
      })
    }
  }

  static get defaultProps () {
    return {
      event: {}
    }
  }

  render () {
    return (
      <Card
        className='event'
        style={style.card}
        onClick={() => this.showOverview()}>
        <CardHeader
          className='event-header'
          titleStyle={style.cardHeader.title}
          subtitleStyle={style.cardHeader.subtitle}
          title={formattedEventTime(this.props.event.event_time)}
          subtitle={this.props.event.topic}/>
        <CardTitle
          titleStyle={style.cardTitle}
          title={this.formatedEventType()}/>
        <EventOverviewDialog event={this.props.event} />
        <EventRetryDialog event={this.props.event} />
      </Card>
    )
  }

  showOverview () {
    this.props.onShowOverview(this.props.event)
  }

  formatedEventType () {
    return this.props.event.event_type || EMPTY_EVENT_TYPE
  }
}

export default connect((state, ownProps) => ownProps, {
  onShowOverview: showEventOverview
})(Event)