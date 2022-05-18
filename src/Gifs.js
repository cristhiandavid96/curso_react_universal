import './App.css'
import React, { useEffect, useState } from 'react'
import getGifs from './Services/GetGifs'

export default function Gifs() {

  const [allGifs, setGifs] = useState()

  useEffect(() => {
    getGifs({ keyword: 'homero' }).then(response => { setGifs(response) })
  }, [])

  return (
    <div className="App">

      {
        allGifs?.map(({ id, title, url }, key) =>
          <div key={key}>
            <h4>{title}</h4>
            {/* <small>{id}</small> */}
            <img
              key={key}
              alt={title}
              src={url}
              id={id}
            />
          </div>)

      }

      {/* <Counter/> */}
    </div>
  )
}



