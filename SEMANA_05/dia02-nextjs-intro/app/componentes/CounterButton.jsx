"use client"
import { useState } from "react"

const CounterButton = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        className="py-2 px-2 bg-orange-400 rounded-lg"
        onClick={() => setCounter(counter + 1)}
      >
        Button {counter}
      </button>
    </>
  )
}

export default CounterButton;