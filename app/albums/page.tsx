import React from 'react'
import getAlbums from '@/lib/getAlbums'
import Link from 'next/link'
import styles from './styles.module.css'

export default async function Albums() {
    const albumsData: Promise<Album[]> = getAlbums()
    
    const albums = await albumsData

    const content = (
        <section>
            <h1 className={styles.albumh1}>ALBUMS</h1>
            <br></br>
            {albums.map(album => {
                return (
                    <>
                    <p key={album.id} className={styles.album}>
                        {album.id} - {album.title}
                    </p>
                    <br></br>
                    </>
                )
            })}
        </section>
    )
  return (
    content
  )
}
