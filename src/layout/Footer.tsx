import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-20 border-t c-column">
      <div className="my-3 flex justify-center space-x-3">
        <Link to="/about/site">사이트소개</Link>
        <Link to="/about/company">회사소개</Link>
        <Link to="/about/ad">광고</Link>
        <Link to="/about/privacy">개인정보처리방침</Link>
        <Link to="/about/help">도움말</Link>
      </div>
      <div className="my-4 leading-none"><a href="/api/counters/adng/inc?r=http://www.natgeokorea.com/magazine" target="_blank">National
        Geographic</a></div>
      <div className="my-4 text-xl leading-none"><Link to="/">RaySoda</Link></div>
    </div>
  )
}

export default Footer
