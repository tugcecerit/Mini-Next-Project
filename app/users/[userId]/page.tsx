import getUser from '@/lib/getUser'
import getUserAlbums from '@/lib/getUserAlbums'
import { Suspense } from 'react'
import UserAlbums from './components/UserAlbums'
import { Metadata } from 'next'

type Params = {
    params: {
        userId: string
    }
}


export default async function UserPage( {params: {userId}}: Params) {
  const userData: Promise<User> = getUser(userId)
  const userAlbumsData: Promise<Album[]> = getUserAlbums(userId)

const user = await userData

  return (
    <>
    <h2>{user.name}</h2>
    <br></br>
    <Suspense fallback={<h2>Loading...</h2>}>
      {/* @ts-expect-error Server Component */}
      <UserAlbums promise={userAlbumsData} />
    </Suspense>
    </>
  )
}
