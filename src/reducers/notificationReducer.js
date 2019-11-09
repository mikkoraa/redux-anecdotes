const initialState = {content: 'This is the initial notification.'}

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_NOTIFICATION":
			return action.data
		case "GET_NOTIFICATION":
			return state
		default:
			return state
	}
}

export const setNotification = (notification) => {
	return {
		type: "SET_NOTIFICATION",
		data: {
			content: notification
		}
	}
}

export const getNotification = () => {
	return {
		type: "GET_NOTIFICATION"
	}
}

export default notificationReducer