import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { config } from '../lib/config'
import { limitNumber, numberFrom } from '../lib/primitive'
import { UrlMaker } from '../lib/url2'

export interface ImageHead {
  id: number
  owner: {
    id: number
    name: string
    home: string
  }
  cdateStr: string
  comment: string
  thumbUrl: string
}

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

export function ImageListComponent() {
  const [list, setList] = useState<ImageHead[] | null>(null)
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')
  const query = new URLSearchParams(useLocation().search)
  const p = limitNumber(numberFrom(query.get('p'), 1), 1, NaN)
  const ps = limitNumber(numberFrom(query.get('ps'), 16), 1, 128)
  const d = query.get('d')

  useEffect(() => {
    fetch(`/api/image?p=${p}&ps=${ps}&d=${d}`)
      .then(res => res.json())
      .then(body => {
        const list: ImageHead[] | undefined = body.list
        if (list && list.length) {
          setList(list)
          setPrev(p > 1 ? UrlMaker.from('/image-list')
            .add('d', d).add('p', p - 1, 1).add('ps', ps, 16).gen() : '')
          setNext(list.length === ps ? UrlMaker.from('/image-list')
            .add('d', d).add('p', p + 1).add('ps', ps, 16).gen() : '')
        }
        console.log(prev)
        console.log(next)
      })
  }, [])

  if (list && list.length) {
    return (
      <Fragment>
        <Helmet>
          <meta property="og:image" content={list[0].thumbUrl || ''}/>
        </Helmet>
        <div className="mt-image-thumb max-w-full text-center">
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
            {prev &&
            <Link to={prev} className="mr-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </Link>
            }
            {next &&
            <Link to={next}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>}
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
  return <></>
}
