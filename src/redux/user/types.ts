export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Record<string, any>
  phone: string
  website: string
  company: Record<string, any>
}

export interface UserState {
  users: User[]
}

export const FETCH_USERS = "FETCH_USERS"
export const NEW_USER = "NEW_USER"

interface FetchUsersAction {
  type: typeof FETCH_USERS
  payload: User[]
}

export type UserActionTypes = FetchUsersAction
