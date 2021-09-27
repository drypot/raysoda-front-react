import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../entity/config'

export function Footer() {
  return (
    <div className="mt-ultra mb-12 border-t column link-no-deco">
      <div className="my-3 flex justify-center space-x-3">
        <Link to="/about">사이트소개</Link>
        <Link to="/company">회사소개</Link>
        <Link to="/ad">광고</Link>
        <Link to="/privacy">개인정보처리방침</Link>
        <Link to="/help">도움말</Link>
      </div>
      <div className="my-4 leading-none"><a href="/api/counters/adng/inc?r=http://www.natgeokorea.com/magazine" target="_blank">National
        Geographic</a></div>
      <h3 className="my-4 leading-none"><Link to="/">{config.appName}</Link></h3>
    </div>
  )
}
