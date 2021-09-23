import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AboutCompany() {
  return (
    <div className="c-column">
      <Helmet>
        <title>Company</title>
      </Helmet>
      <h1 className="c-title">회사소개</h1>
      <div className="c-text">
        (주)레이소다<br/>
        설립일: 2003년 3월 1일<br/>
        Korea<br/>
      </div>
      <div className="m-sub c-text">
        대표이사, 이흥일<br/>
        프로그래머, 박규현<br/>
        <a href="https://raysoda.com/drypot" target="_blank" className="c-link">https://raysoda.com/drypot</a><br/>
      </div>
      <div className="m-sub c-text">
        서비스<br/>
        <a href="https://raysoda.com" target="_blank" className="c-link">https://raysoda.com</a><br/>
        <a href="https://rapixel.com" target="_blank" className="c-link">https://rapixel.com</a><br/>
        <a href="https://osoky.com" target="_blank" className="c-link">https://osoky.com</a><br/>
      </div>
    </div>
  )
}
