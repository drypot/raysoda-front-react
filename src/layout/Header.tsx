import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../lib/config'

const Header = () => {
  return (
    <div className="c-column border-b">
      <div className="my-4 text-xl leading-none">
        <Link to="/">{config.appName}</Link>
      </div>
    </div>
  )
}

export default Header

