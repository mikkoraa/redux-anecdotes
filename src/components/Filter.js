import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {

  const filterChanged = (event) => {
    props.store.dispatch(filterChange(event.target.value))
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

export default Filter