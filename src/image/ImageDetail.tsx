import React, { Fragment, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { numberFrom } from '../lib/base/primitive'
import { Helmet } from 'react-helmet-async'
import { ImageDetail } from '../entity/image'

export function ImageDetailPage() {
  const history = useHistory()
  const params = useParams<{ id: string }>()
  const id = numberFrom(params.id)
  const [image, setImage] = useState<ImageDetail | null>(null)
  //const [, set] = useState()

  useEffect(() => {
    fetch(`/api/image/${id}`)
      .then(res => res.json())
      .then(body => {
        setImage(body.image ?? null)
      })
  }, [])

  function onClickImage() {
    history.go(-1)
  }

  if (image) {
    return (
      <Fragment>
        <Helmet>
          <meta property="og:image" content={image.thumbUrl}/>
          <meta property="og:title" content={image.owner.name}/>
          <meta property="og:description" content={image.comment}/>
        </Helmet>
        <div className="flex flex-col items-center">
          <div className="max-w-full inline-block relative">
            <img src={image.thumbUrl} className="max-w-full cursor-pointer" onClick={onClickImage}/>
          </div>
        </div>
        <div className="mt-big column">
          <p className="whitespace-pre-line">
            사진 갤러리입니다.<br/>
            업로드된 사진은 2048x2048 크기로 리사이즈됩니다.<br/>
            사진은 18시간마다 등록하실 수 있습니다.<br/>
            {image.comment}</p>
          <p className="text-xl link-no-deco">
            <Link to={'/user/' + encodeURIComponent(image.owner.home)}>{image.owner.name}</Link>
          </p>
          <p className="mt-big">{image.cdateStr.slice(0, 16)}</p>
          {/*image.updatable &&*/
          <div className="mt-big space-x-3">
            <button className="btn btn-hover-green text-sm">수정</button>
            <button className="btn btn-hover-red text-sm">삭제</button>
          </div>
          }
        </div>
      </Fragment>
    )
  }
  return null
}
