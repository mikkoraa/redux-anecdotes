import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {

  const filterChanged = (event) => {
    props.filterChange(event.target.value)
    //props.store.dispatch(filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter
      <input
        type="text"
        name="filter"
        onChange={filterChanged}
      />
    </div>
  )
}

const ConnectedNotes = connect(null, { filterChange })(Filter)
export default ConnectedNotes