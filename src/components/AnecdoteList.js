
import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes
    const filter = store.getState().filter

    anecdotes.sort((a, b) => b.votes - a.votes)
  
    const handleVoteClick = (anecdote) => {
      store.dispatch(voteAnecdote(anecdote.id))
      store.dispatch(setNotification(anecdote.content))
      setTimeout(() => {
        store.dispatch(setNotification(''))
      }, 2000)
    }

    const anecdotesToShow = () => {
      if (filter === '') {
        return anecdotes
      } else {
        return anecdotes.filter(item => item.content.includes(filter))
      }
    }

    return (
    <div>
    {anecdotesToShow().map(anecdote =>
      <div key={anecdote.id} >
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleVoteClick(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList