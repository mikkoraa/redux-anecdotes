const notificationReducer = (state = [{ content: "This the initial notification...", timeout: 2000 }], action) => {
	switch (action.type) {
		case "SET_NOTIFICATION":
			return action.data
		case "CLEAR_NOTIFICATION":
			return {
				content: "",
				timeout: 0
			}
		case "GET_NOTIFICATION":
			return state
		default:
			return state
	}
}

export const setNotification = (notification, timeout) => {
	return {
		type: "SET_NOTIFICATION",
		data: {
			content: notification,
			timeout
		}
	}
}

export const getNotification = () => {
	return {
		type: "GET_NOTIFICATION"
	}
}

export const clearNotification = () => {
	return {
		type: "CLEAR_NOTIFICATION"
	}
}
export default notificationReducer