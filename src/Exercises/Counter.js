import '../App.css'
import React, { useEffect, useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)


  useEffect(() => {
    setCount(1)
  }, []) //mount component

  useEffect(() => {

    if (count == 20) {

      console.log("entro al 20")
    }

  }, [count]) //update component



  return (
    <>
      <p><b>count : {count}</b></p>
      <button onClick={() => setCount(count + 1)}> suma contador </button>
      <button onClick={() => setCount(count - 1)}> resta contador </button>
    </>
  )
}

export default Counter

