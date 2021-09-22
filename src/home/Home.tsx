import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

let config = 'abc'

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  });

  // @ts-ignore
  console.log(config)

  return (
    <div className="">
      <h1 className="dp-title">Home</h1>
      <div className="dp-text">
        <Link to="/about/site">About</Link><br/>
        <Link to="/image/10">Image/10</Link><br/>
      </div>
    </div>
  )
}

export default Home
