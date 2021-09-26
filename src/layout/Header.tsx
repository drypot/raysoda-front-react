import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../entity/config'

export function Header() {
  return (
    <div className="column border-b link-no-deco">
      <h3 className="my-4 leading-none">
        <Link to="/">{config.appName}</Link>
      </h3>
    </div>
  )
}
