import { Photo } from './photo';

export interface Member {
  id: number
  username: string
  age: number
  photoUrl: string
  email: string
  knownAs: string
  created: Date
  lastActive: Date
  favoriteCraft: string
  introduction: string
  interests: string
  lookingFor: string
  city: string
  country: string
  photos: Photo[]
}

