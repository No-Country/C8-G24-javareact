import React from 'react'
import { Spinner } from 'flowbite-react';

const SpinnerContainer = () => {
  return (
    <div className="text-center flex justify-center items-center h-96">
    <Spinner
      aria-label="Extra large Center-aligned spinner"
      className="w-20 h-20"
      color="warning"
    />
  </div>
  )
}

export default SpinnerContainer