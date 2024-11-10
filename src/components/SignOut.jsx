import { auth } from '@/lib/firebase'
import React from 'react'

export default function SignOut () {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()} className='bg-[#282c34] border-none text-white py-2 px-8
    text-center inline-block cursor-pointer text-lg disabled:opacity-[0.5] disabled:cursor-not-allowed'>Sign Out</button>
  )
}
