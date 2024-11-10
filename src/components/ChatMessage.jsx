import { auth } from '@/lib/firebase'
import Image from 'next/image'
import React from 'react'

export default function ChatMessage (props) {
  const { text, uid, photoURL } = (props.message)

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass} flex flex-row items-center`}>
      <Image src={photoURL} alt='avatar img' width={40} height={40} className='rounded-full object-cover object-center my-0.5 mx-1.5' />
      <p className='max-w-[500px] mb-3 py-2.5 px-5 rounded-[25px] relative leading-6 text-white text-center'>{text}</p>
    </div>

  )
}
