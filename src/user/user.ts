export interface CurrentUser {
  id: number
  name: string
  home: string
}

// @ts-ignore
export let currentUser: CurrentUser = _user
