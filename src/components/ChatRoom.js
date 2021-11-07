import React, { useEffect, useState } from 'react'
import Message from "./BaseMsg";
import { addDoc, collection, onSnapshot, query, serverTimestamp } from "firebase/firestore"
import db from "../firebase"

function ChatRoom () {
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
    await addDoc( collection( db, "messages" ), {
      userName: localStorage.getItem("name"),
      msg: inputText,
      createdOn: serverTimestamp()
    } )
    setInputText( "" )
  }



  return (
    <div>
      {/* Container starts here */}
      <div className="w-full">
      {/* <div className={`${isLocalUser ? "text-right": "text-left"} border w-full`}> */}
        {/* Messages Container starts here */}
        <div className="mt-5 flex flex-col">
          {msgs.map( msg => <Message userName={msg.userName} key={msg.id} msg={msg.msg} /> )}
          {/* <Message userName="Jawad" msg={mesg} /> */}
        </div>
        {/* Messages Container Ends here */}




        {/* Input field starts here */}
        <form onSubmit={sendMessage} className="fixed bottom-3 right-10 left-10 flex bg-gray-200 mx-auto rounded-xl overflow-hidden">
          <input value={inputText} onChange={( e ) => { setInputText( e.target.value ) }} placeholder="Type a message and press enter" className="bg-transparent flex-1 p-3 text-lg outline-none" type="text" />
          <button className="bg-blue-600 text-white px-5">Send</button>
        </form>
        {/* Input field starts here */}
      </div>
      {/* Container Ends here */}
    </div>
  )
}

export default ChatRoom
