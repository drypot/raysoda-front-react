import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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

export function ImageList() {
  const [list, setList] = useState<ImageHead[] | null>(null)

  useEffect(() => {
    fetch('/api/image')
      .then(res => res.json())
      .then(data => setList(data.list))
  }, [])

  if (list && list.length) {
    return (
      <Fragment>
        <Helmet>
          <meta property="og:image" content={list[0].thumbUrl || ''}/>
        </Helmet>
        <div className="my-[8rem] md:mt-[9rem] lg:mt-[10rem] xl:mt-[11rem] max-w-full link-no-deco text-center">
          {list.map(image =>
            <div className="mt-[8rem] md:mt-[9rem] lg:mt-[10rem] xl:mt-[11rem] first:mt-0" key={image.id}>
              {/* 이미지 좌상단에 FullScreen 아이콘을 넣기 위해 inline-block 을 한다. */}
              {/* inline-block 을 하면 div 크기가 내부 이미지 크기와 같아진다. */}
              <div className="inline-block relative">
                <Link to={'/image/' + image.id}>
                  <img src={image.thumbUrl} className="max-w-full max-h-screen"/>
                </Link>
              </div>
              { image.comment && <div className="mt-4">{image.comment}</div> }
              <div className="mt-4"><Link to={'/user/' + image.owner.home}>{image.owner.name}</Link></div>
            </div>
          )}
        </div>
      </Fragment>
    )
  }
  return <></>
}
