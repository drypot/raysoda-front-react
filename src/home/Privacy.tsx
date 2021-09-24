import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <div className="column">
      <Helmet>
        <title>Privacy</title>
      </Helmet>
      <h1>개인정보처리방침</h1>
      <div className="m-big">
        <p>
          개인정보는 로그인에만 사용됩니다.
        </p>
      </div>
    </div>
  )
}
