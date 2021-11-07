import { useState } from "react"
import ChatRoom from "./components/ChatRoom"

function App () {
  const [name, setName] = useState( "" )




  function saveName ( event ) {
    event.preventDefault()
    if ( !name ) {
      console.warn( "Enter Name" )
      return
    }
    localStorage.clear()
    localStorage.setItem( "name", name )
    setName( "" )
  }



  return (
    <div className="max-w-3xl bg-gray-800 mx-auto min-h-screen">
      {/* Header Start Here */}
      <header className="w-full text-center bg-purple-500 py-6  box-border fixed top-0 left-0 right-0 z-10">
        {/* <header className="w-full flex justify-center items-center h-24 bg-purple-700"> */}
        <h1 className="text-white text-2xl cursor-pointer">Chat Room</h1>
      </header>
      {/* Header Ends here */}

      {/* Main Starts here */}
      <main className="px-5 pb-16 relative top-12">
        {localStorage.getItem( "name" ) ? <ChatRoom /> :
          <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={saveName} className="bg-gray-200 shadow-lg rounded-lg flex flex-col p-10">
              <label className="ml-1" htmlFor="name">Enter Your Name here</label>
              <input value={name} onChange={( e ) => { setName( e.target.value ) }} type="text" id="name" placeholder="E.g. Jawad Ali" className="text-lg p-2 my-3 rounded-lg" />
              <button type="submit" className="bg-green-600 p-2 rounded-lg text-white">Save</button>
            </form>
          </div>
        }
      </main>
      {/* Main Ends here */}
    </div>
  )
}


export default App
