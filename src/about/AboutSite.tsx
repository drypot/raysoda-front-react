import React from 'react'
import { Link } from 'react-router-dom'

const AboutSite = () => {
  return (
    <div className="">
      <h1 className="dp-title">About</h1>
      <div className="dp-text">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default AboutSite
