import React from 'react'
import { connect } from 'react-redux'

const Notification = ( props ) => {
  let message = ''
  if (props && props.notification) {
    message = props.notification;
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div>
      {message && message !== '' &&
      <div style={style}>
        {message}
      </div>}<br/>
    </div>
  )
}

const notificationToShow = ({ notification}) => {
    return notification.content
}

const mapStateToProps = (state) => {
  return {
    notification: notificationToShow(state), 
  }
}

const ConnectedNotes = connect(  
  mapStateToProps,
  null)(Notification)
export default ConnectedNotes