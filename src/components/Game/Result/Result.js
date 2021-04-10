import React from 'react'

const Result = ({ children, logs }) => {
  return (
    <>
      <div>Stats | Left | Right</div>
      <div>{JSON.stringify(logs)}</div>
      { children }
    </>
  )
}

export default Result