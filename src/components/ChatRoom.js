import { addDoc, collection, onSnapshot, query } from "firebase/firestore"
import React, { useEffect, useRef, useState } from 'react'
import db from "../firebase"
import Message from "./BaseMsg"

function ChatRoom () {
  const dummy = useRef()
  const [msgs, setMsgs] = useState( [] )
  const [inputText, setInputText] = useState( "" )


  useEffect( () => {
    onSnapshot( query( collection( db, "messages" ) ), snapshot => {
      const messages = []
      snapshot.forEach( snap => {
        messages.push( {
          ...snap.data(),
          id: snap.id
        } )
      } )
      setMsgs( messages )
    } )
  }, [] )


  async function sendMessage ( event ) {
    event.preventDefault()
    if ( !inputText ) return
    setInputText( "" )
    await addDoc( collection( db, "messages" ), {
      userName: localStorage.getItem( "name" ),
      msg: inputText,
      createdOn: Date.now()
    } )
    dummy.current.scrollIntoView( { behavior: 'smooth' } )
  }


  function SortByDate ( arr ) {
    return arr.sort( ( a, b ) => a.createdOn < b.createdOn ? -1 : 1 )
  }

  return (
    <div className="w-full">
      {/* Messages Container starts here */}
      <div className="mx-5 flex flex-col overflow-y-scroll h-screen pb-44 sm:pb-36">
        {SortByDate( msgs ).map( msg => <Message message={msg} key={msg.id} /> )}
        <span ref={dummy}></span>
      </div>
      
      {/* Messages Container Ends here */}




      {/* Input field starts here */}
      <form onSubmit={sendMessage} className="bottom-0 right-0 left-0 flex bg-gray-200 mx-auto overflow-hidden sticky">
        <input value={inputText} onChange={( e ) => { setInputText( e.target.value ) }} placeholder="Type a message and press enter" className="bg-transparent flex-1 p-3 text-lg outline-none" type="text" />
        <button className="bg-purple-700 text-white px-5">Send</button>
      </form>
      {/* Input field starts here */}
    </div>
  )
}

export default ChatRoom
