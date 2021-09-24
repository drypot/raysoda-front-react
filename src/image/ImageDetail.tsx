import React from 'react'
import { Link, useParams } from 'react-router-dom'

export function ImageDetail() {
  const { id } = useParams<{ id: string}>()

  return (
    <div className="">
      <h1 className="dp-title">Image { id }</h1>
      <div className="dp-text">
        <Link to="/about"></Link>
      </div>
    </div>
  )
}
