import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { config, pageTitle } from '../lib/config'
import { currentUser } from '../user/user'
import { Helmet } from 'react-helmet'

const Home = () => {

  console.log(config)
  console.log(currentUser)

  return (
    <div className="">
      <Helmet>
      </Helmet>
      <h1 className="dp-title">Home</h1>
      <div className="dp-text">
        <Link to="/about/site">About</Link><br/>
        <Link to="/image/10">Image/10</Link><br/>
      </div>
    </div>
  )
}

export default Home
