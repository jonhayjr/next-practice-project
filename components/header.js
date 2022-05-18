import Link from 'next/link'
import Nav from './nav'
const Header = () => {
  return (
    <header className='bg-black text-white px-2 py-4'>
        <div className='flex justify-between items-center max-w-screen-2xl mx-auto'>         
            <h1 className='text-3xl font-bold'><Link href='/'>JH</Link></h1>
            <Nav/>
        </div>
    </header>
  )
}

export default Header