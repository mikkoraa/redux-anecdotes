import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {

	switch (action.type) {
    case "UPDATE":
			return state.map(anecdote =>
				anecdote.id !== action.data.id ? anecdote : action.data
			)
    case "INIT_ANECDOTES":
			return action.data
		case "ADD_ANECDOTE":
			return [...state, action.data]
		default:
			return state
	}
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newAnecdote,
    })
  }
}

export const updateAnecdote = anecdote => {
	return async dispatch => {
		await anecdoteService.update(anecdote.id, anecdote)
		dispatch({
			type: "UPDATE",
			data: anecdote
		})
	}
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer