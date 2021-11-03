import { useState } from "react"
import Message from "./components/BaseMsg"

function App () {

  const [msgs, setMsgs] = useState( [
    {
      id: 1,
      txt: "Lorem, ipsum dolor"
    },
    {
      id: 2,
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi rem explicabo"
    },
    {
      id: 3,
      txt: "Lorem ipsum dolor sit amet"
    },
  ] )

  const [msgText, setMsgText] = useState( "" )
  function sendMessage ( event ) {
    event.preventDefault()
    setMsgs( [...msgs, {
      id: new Date().valueOf(),
      txt: msgText
    }] )
    setMsgText( "" )
  }

  return (
    <div className="w-full h-screen bg-yellow-50 flex justify-center">
      {/* Container starts here */}
      <div className="border w-full text-center">
        {/* Messages Container starts here */}
        <div className="mt-5 inline-block">
          {msgs.map( msg => <Message userName="Jawad" key={msg.id} msg={msg.txt} /> )}
          {/* <Message userName="Jawad" msg={mesg} /> */}
        </div>
        {/* Messages Container Ends here */}




        {/* Input field starts here */}
        <form onSubmit={sendMessage} className="fixed bottom-3 right-10 left-10 flex bg-gray-200 mx-auto rounded-xl overflow-hidden">
          <input value={msgText} onChange={( e ) => { setMsgText( e.target.value ) }} placeholder="Type a message and press enter" className="bg-transparent flex-1 p-3 text-lg outline-none" type="text" />
          <button className="bg-blue-600 text-white px-5">Send</button>
        </form>
        {/* Input field starts here */}
      </div>
      {/* Container Ends here */}
    </div>
  )
}

export default App
