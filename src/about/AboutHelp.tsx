import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AboutHelp() {
  return (
    <div className="c-column">
      <Helmet>
        <title>Help</title>
      </Helmet>
      <h1 className="c-title">도움말</h1>
      <div className="c-text">
        궁금하신 점은 이메일로 문의 부탁드립니다.
      </div>
      <div className="m-sub c-text">
        페이스북 : &nbsp;
        <a href="https://www.facebook.com/raysoda.news" target="_blank" className="c-link">https://www.facebook.com/raysoda.news</a><br/>
        이메일 : &nbsp;
        <a href="mailto:support+raysoda@raysoda.com" className="c-link">support+raysoda@raysoda.com</a><br/>
      </div>
      <div className="m-sub c-text">
        회원탈퇴를 원하실 경우 : &nbsp;
        <a href="/users/deactivate" className="c-link">계정사용중지신청</a>
      </div>
    </div>
  )
}
