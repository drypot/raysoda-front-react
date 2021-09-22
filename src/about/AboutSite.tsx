import React from 'react'
import { Link } from 'react-router-dom'
import { pageTitle } from '../lib/config'
import { Helmet } from 'react-helmet'

const AboutSite = () => {
  return (
    <div className="">
      <Helmet>
        <title>{ pageTitle('About') }</title>
      </Helmet>
      <h1 className="dp-title">About</h1>
      <div className="dp-text">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default AboutSite
