import React from 'react'

function BaseMsg ( { msg, userName} ) {
const localUser = localStorage.getItem("name") === userName
  return (
      <div className={`${localUser? "self-end": "self-start"} text-left block my-4`}>
        {!localUser &&
          <p className="m-2 text-gray-50">{userName}</p>}
        <p className={`${localUser ? "bg-blue-500 text-white" : "bg-gray-200"} p-4 rounded-lg text-md max-w-20 shadow-lg max-w-sm`} >{msg}</p>
      </div>
    // </div>
  )
}

export default BaseMsg
