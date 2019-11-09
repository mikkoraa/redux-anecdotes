
import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {
  
    const handleVoteClick = (anecdote) => {
      props.voteAnecdote(anecdote.id)
      props.setNotification(anecdote.content)
      setTimeout(() => {
        props.setNotification('')
      }, 2000)
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
  voteAnecdote,
  setNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
