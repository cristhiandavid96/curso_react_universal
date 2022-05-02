import './App.css'
import React, { useEffect, useState } from 'react'
import Counter from './Counter'


const apiKey = 'https://api.giphy.com/v1/gifs/search?key=fVjvHkTWUFlHHm6e1IDBsF23Hjjl2cnN&q=homero'

export default function Gifs() {

  const [allGifs, setGifs] = useState();

  useEffect(() => {

    fetch(apiKey)
      .then(res => res.json())
      .then(response => {
        const { data } = response

        if (Array.isArray(data)) {
          const gifs = data.map(image => image.images.downsized_medium.url)
          setGifs(gifs)
        }

      })
      .catch(error => console.error('Error:', error))

  }, []);

  return (
    <div className="App">

      <section>
        {
          allGifs?.map(singleGif => <img src={singleGif} />)
        }
      </section>
      
      
      
      {/* <Counter/> */}
    </div>
  )
}



