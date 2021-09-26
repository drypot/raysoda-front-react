import { dateNull } from '../lib/date2'

export interface Image {
  id: number
  uid: number
  cdate: Date
  vers: number[] | string | null
  comment: string
}

// vers 등 오브젝트 기본 값은 undefined 대신 null 을 쓰는 것이 좋다.
// JSON.stringify(null) 은 'null' 이지만,
// JSON.stringify(undefined) 는 undefined 다. 문제가 생긴다.

export function imageOf(params?: Partial<Image>): Image {
  return {
    id: 0,
    uid: 0,
    cdate: dateNull,
    vers: null,
    comment: '',
    ...params
  }
}

export interface ImageListItem {
  id: number
  owner: {
    id: number
    name: string
    home: string
  }
  cdateStr: string
  vers: number[] | string | null
  comment: string
  thumbUrl: string
}