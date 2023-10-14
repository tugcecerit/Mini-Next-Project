type Props = {
    promise: Promise<Album[]>
}

export default async function UserAlbums({ promise } : Props) {
    const albums = await promise
    const content = albums.map(album => {
        return (
            <section key={album.id}>
                <p>{album.id} - {album.title}</p>
                <br></br>
            </section>
        )
    })
  return (
    content
  )
}
