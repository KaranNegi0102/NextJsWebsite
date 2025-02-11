import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';

const NavBar = async () => {
  const session = await auth();

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <nav className="flex items-center gap-6">
        <Link href="/">
          <Image src="/logo.jpg" alt="Vercel Logo" width={70} height={20} />
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {session?.user ? (
          <>
            <Link href="/startup/create">
              <span className="cursor-pointer text-black">CreateStartup</span>
            </Link>
            <form action={async ()=> {
              "use server"
              await signOut({redirectTo:"/"})
              }} 
              className="cursor-pointer text-black ">
              <button
              type="submit"
              >Logout</button>
            </form>
            <Link href={`/user/${session.user.id}`}>
              <span className="cursor-pointer text-black">{session.user.name}</span>
            </Link>
          </>
        ) : (
          <form action={async() => {
            "use server"
            await signIn('github')
          }
          } className="cursor-pointer  text-black">
            <button
            type="submit"
            >Login</button>
          </form>
        )}
      </div>
    </header>
  );
};

export default NavBar;
