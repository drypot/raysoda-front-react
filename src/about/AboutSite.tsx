import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AboutSite() {
  return (
    <div className="c-column">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className="c-title">About</h1>
      <div className="c-text">
        사진 갤러리입니다.<br/>
        업로드된 사진은 2048x2048 크기로 리사이즈됩니다.<br/>
        사진은 18시간마다 등록하실 수 있습니다.<br/>
      </div>
    </div>
  )
}
