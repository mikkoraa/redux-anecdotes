
import React from 'react'
import { connect } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {
  
    const handleVoteClick = async (anecdote) => {
      anecdote.votes++
      props.updateAnecdote(anecdote)
      props.setNotification(anecdote.content + " voted! Now total of " + anecdote.votes + " votes!", 2000)
    }

    return (
    <div>
    {props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  anecdotes.sort((a, b) => b.votes - a.votes)
  if (filter === '') {
    return anecdotes
  } else {
    return anecdotes.filter(item => item.content.includes(filter))
  }
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state), 
  }
}

const mapDispatchToProps = {
  updateAnecdote,
  setNotification,
  clearNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
