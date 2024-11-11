'use client'
import React, { useEffect, useRef, useState } from 'react'
import { auth, firestore } from '@/lib/firebase'
import { collection, orderBy, query, limit, serverTimestamp, addDoc } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'
export default function ChatRoom () {
  const messagesRef = collection(firestore, 'messages')
  const queryOrder = query(messagesRef, orderBy('createdAt', 'asc'), limit(25))

  const [messages] = useCollectionData(queryOrder, { idField: 'id' })
  const [formValue, setFormValue] = useState('')
  const { uid, photoURL } = auth.currentUser

  const sendMessage = async (e) => {
    e.preventDefault()
    if (formValue) {
      const message = {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL
      }
      await addDoc(messagesRef, message)
      setFormValue('')
    }
  }
  const dummy = useRef()

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
    <main className='p-2.5 h-[80vh] overflow-y-scroll flex flex-col  space-y-4'>
      {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
      <div ref={dummy}></div>
    </main>
    <form onSubmit={sendMessage} className='h-[8vh] fixed bottom-0 bg-black w-full max-w-[728px] flex '>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className='w-full outline-none border-none bg-[#3a3a3a] text-white px-2.5' placeholder='Type a message' />
      <button type='submit' className='border-none outline-none  p-1.5 w-[20%] bg-[#38388F] text-white flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></button>
    </form>
    </>
  )
}
