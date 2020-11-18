import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-loader-spinner'

function LoadingComponent (props) {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <Loader type="Watch" color="#2BAD60" height="100" width="100" />
    </div>
  )
}

export default LoadingComponent
