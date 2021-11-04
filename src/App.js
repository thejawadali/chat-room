import { addDoc, collection, onSnapshot, query, serverTimestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import Message from "./components/BaseMsg"
import db from "./firebase"


function App () {
  const [msgs, setMsgs] = useState( [] )
  const [inputText, setInputText] = useState( "" )

  useEffect( () => {
    onSnapshot( query( collection( db, "messages" ) ), snapshot => {
      const messages = []
      snapshot.forEach(snap => {
        messages.push({
          ...snap.data(),
          id: snap.id
        })
      });
      setMsgs(messages)
    } )
  }, [] )

  async function sendMessage ( event ) {
    event.preventDefault()
    await addDoc(collection(db, "messages"), {
      userName: "Mohib Ahsan",
      msg: inputText,
      createdOn: serverTimestamp()
    })
    setInputText( "" )
  }

  return (
    <div className="w-full h-screen bg-yellow-50 flex justify-center">
      {/* Container starts here */}
      <div className="border w-full text-center">
        {/* Messages Container starts here */}
        <div className="mt-5 inline-block">
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

export default App
