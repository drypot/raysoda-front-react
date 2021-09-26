import React, { Fragment, MouseEventHandler, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { config } from '../lib/config'
import { limitNumber2 } from '../lib/primitive'
import { UrlMaker } from '../lib/url2'
import { ImageListItem } from '../entity/image'

export default function ImageList() {
  return (
    <Fragment>
      <div className="column">
        <h1><Link to="/" className="link-no-deco">{config.appName}</Link></h1>
      </div>
      <ImageListComponent/>
    </Fragment>
  )
}

function PrevArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
    </svg>
  )
}

function NextArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
    </svg>
  )
}

export function ImageListComponent() {
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [page, setPage] = useState(limitNumber2(query.get('p'), 1, 1, NaN))
  const [pageSize, setPageSize] = useState(limitNumber2(query.get('ps'), 16, 1, 128))
  const [date, setDate] = useState(query.get('d'))
  const [list, setList] = useState<ImageListItem[]>([])
  const prevUrl = page > 1 ? UrlMaker.from('/image-list')
    .add('d', date).add('p', page - 1, 1).add('ps', pageSize, 16).gen() : ''
  const nextUrl = list.length === pageSize ? UrlMaker.from('/image-list')
    .add('d', date).add('p', page + 1).add('ps', pageSize, 16).gen() : ''

  useEffect(() => {
    fetch(`/api/image?p=${page}&ps=${pageSize}&d=${date ?? ''}`)
      .then(res => res.json())
      .then(body => {
        setList(body.list ?? [])
      })
  }, [page, pageSize, date])

  const onClickPrev: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    history.push(prevUrl)
    setPage(page - 1)
  }

  const onClickNext: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    history.push(nextUrl)
    setPage(page + 1)
  }

  return (
    <Fragment>
      <Helmet>
        {list.length && <meta property="og:image" content={list[0].thumbUrl || ''}/>}
      </Helmet>
      <div className="mt-image-thumb max-w-full text-center">
        {list.length == 0 && <p>마지막 페이지입니다.</p>}
        {list.map(image =>
          <div className="mt-image-thumb first:mt-0 link-no-deco" key={image.id}>
            {/* 이미지 좌상단에 FullScreen 아이콘을 넣기 위해 inline-block 을 한다. */}
            {/* inline-block 을 하면 div 크기가 내부 이미지 크기와 같아진다. */}
            <div className="inline-block relative">
              <Link to={'/image/' + image.id}>
                <img src={image.thumbUrl} className="max-w-full max-h-screen"/>
              </Link>
            </div>
            {image.comment && <div className="mt-4">{image.comment.split(/\r\n|\n/, 1)[0]}</div>}
            {/* user.home 에 '/' 있는 경우도 있으므로 인코딩한다. */}
            <div className="mt-4"><Link to={'/user/' + encodeURIComponent(image.owner.home)}>{image.owner.name}</Link>
            </div>
          </div>
        )}
        <div className="mt-image-thumb flex justify-center">
          {prevUrl.length > 0 && <a href={prevUrl} onClick={onClickPrev} className="mr-12"><PrevArrow/></a>}
          {nextUrl.length > 0 && <a href={nextUrl} onClick={onClickNext}><NextArrow/></a>}
        </div>
        <div className="mt-image-thumb flex justify-center space-x-6">
          <a href="https://raysoda.com">RaySoda</a>
          <a href="https://rapixel.com">Rapixel</a>
          <a href="https://osoky.com">Osoky</a>
        </div>
      </div>
    </Fragment>
  )
}
