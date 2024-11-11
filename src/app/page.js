'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from '@/components/SignIn'
import { auth } from '@/lib/firebase'
import ChatRoom from '@/components/ChatRoom'
import SignOut from '@/components/SignOut'

export default function Home () {
  const [user, loading] = useAuthState(auth)
  return (
    <div className='text-center max-w-[728px] mx-auto' >
      <header className='bg-black p-2.5 h-[10vh] min-h-12 text-white fixed top-0
      w-full z-[99] max-w-[728px] flex items-center justify-between box-border'>
          <h1>⚛️🔥💬</h1>
          <SignOut />
      </header>

        <section className='flex flex-col justify-center min-h-screen bg-[#282535]'>
         {loading
           ? <div className='text-white text-xl text-center  flex items-center justify-center'>Loading...</div>
           : user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  )
}
