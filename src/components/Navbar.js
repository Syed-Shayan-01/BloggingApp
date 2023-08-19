import { MdAccountCircle } from 'react-icons/md'
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 md:mb-ml-3 text-xl" href={'/'}> My Blog </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/allPages/allBlog/blog"} className="mr-5 text-xl font-bold hover:text-gray-900">All Blogs</Link>
        </nav>

        <Link href={"/allPages/profile"} className="inline-flex items-center border-0 py-1 px-3
         rounded text-base mt-4 md:mt-0">
          <MdAccountCircle className='text-2xl' />
        </Link>
        {session && <button onClick={() => signOut()} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3
        focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Logout </button>}

        {!session && <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3
        focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <Link href={'/Forms/login'}>Login </Link></button>}


      </div>
    </header>
  );
}

export default Navbar