import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
        <ul className='flex items-center'>
            <li className='mr-12 text-xl'>
                <Link href='/'>Home</Link>
            </li>
            <li className='mr-12 text-xl'>
                <Link href='/about'>About</Link>
            </li>
            <li className='text-xl'>
            <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav