import React from 'react'

const Notification = ({ store }) => {
  const message = store.getState().notification.content;
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

export default Notification