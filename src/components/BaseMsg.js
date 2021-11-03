import React from 'react'

function BaseMsg ( { msg, userName } ) {
  const localUser = false
  return (
    // <div className="block my-4 text-left bg-yellow-500">
      <div className="text-left block">
        {!localUser &&
          <p className="m-2 text-gray-500">{userName}</p>}
        <p className={`${localUser ? "bg-blue-500 text-white" : "bg-gray-200"} p-4 rounded-lg text-md max-w-20 shadow-lg max-w-sm`} >{msg}</p>
      </div>
    // </div>
  )
}

export default BaseMsg
