export default async function getAlbums() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    if (!res.ok) throw new Error('fetching error!')
  return (
    res.json()
  )
}
