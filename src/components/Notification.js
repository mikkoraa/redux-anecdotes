import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearNotification } from "../reducers/notificationReducer"

const Notification = ( props ) => {
	useEffect(() => {
		setTimeout(() => {
			props.clearNotification()
		}, props.timeout)
	}, [props])

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification.content, 
    timeout: state.notification.timeout,
  }
}

const ConnectedNotes = connect(  
  mapStateToProps,
  { clearNotification })(Notification)
export default ConnectedNotes