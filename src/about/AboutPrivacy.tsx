import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AboutPrivacy() {
  return (
    <div className="c-column">
      <Helmet>
        <title>Privacy</title>
      </Helmet>
      <h1 className="c-title">개인정보처리방침</h1>
      <div className="c-text">
        개인정보는 로그인에만 사용됩니다.
      </div>
    </div>
  )
}
