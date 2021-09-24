import React from 'react'
import { config } from '../lib/config'
import { Helmet } from 'react-helmet-async'

export default function Ad() {
  const email = 'support+' + config.appNamel + '@raysoda.com'
  return (
    <div className="column">
      <Helmet>
        <title>Advertise</title>
      </Helmet>
      <h1>광고</h1>
      <div className="mt-big">
        <p>
          ‘광고 내용 / 업체명’ 한 줄 광고를 게재하실 수 있습니다.<br/>
          광고 내용, 링크, 기간, 사업자등록증을 이메일로 보내주십시오.<br/>
          광고비는 주당 부가세 포함 154,000 원입니다.<br/>
          광고비는 선불입니다.<br/>
        </p>
        <p>
          광고 신청: <a href={'mailto:' + email}>{email}</a>
        </p>
      </div>
    </div>
  )
}
