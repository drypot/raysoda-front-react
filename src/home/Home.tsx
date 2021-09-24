import React, { Fragment } from 'react'
import { config } from '../lib/config'
import { currentUser } from '../user/user'
import { Link } from 'react-router-dom'
import { bannerList } from '../banner/banner'
import { ImageList } from '../image/ImageList'

export default function Home() {
  return (
    <div>
      <div className="column">
        <h1><Link to="/" className="link-no-deco">{config.appName}</Link></h1>
        <Menu/>
        <Banner/>
      </div>
      <ImageList/>
    </div>
  )
}

function Menu() {
  const user = currentUser
  return (
    <div className="mt-big flex justify-center space-x-3">
      {user ?
        <Fragment>
          <Link to="/about">사이트소개</Link>
          <Link to="/upload-image">사진등록</Link>
          <Link to={'/' + encodeURIComponent(user.home)}>내사진</Link>
          <Link to="/user-list">회원목록</Link>
          <Link to="/image-list-year">연도별사진</Link>
          <Link to="/logout">접속종료</Link>)
        </Fragment>
        :
        <Fragment>
          <Link to="/about">사이트소개</Link>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
          <Link to="/user-list">회원목록</Link>
          <Link to="/image-list-year">연도별사진</Link>
        </Fragment>
      }
    </div>
  )
}

function Banner() {
  if (bannerList.length) {
    return (
      <div className="mt-large flex flex-col">
        {bannerList.map(banner => <a href={banner.url} target="_blank">{banner.text}</a>)}
      </div>
    )
  }
  return <></>
}
