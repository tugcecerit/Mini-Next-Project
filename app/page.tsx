import Link from 'next/link'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between py-32">
     <h1 className='p-20 text-8xl font-black'>COME ON IN TO SEE<br></br>THE ALBUMS!</h1>
     <Link href="/users" className="flex items-center gap-2">See Our Rockers <BsFillArrowUpRightCircleFill /> </Link>
     <Link href="/albums" className="flex items-center gap-2">Go To Albums <BsFillArrowUpRightCircleFill /> </Link>
     <Link href={'/about'} className="flex items-center gap-2">Who We Are? <BsFillArrowUpRightCircleFill /></Link>
    </main>
  )
}
