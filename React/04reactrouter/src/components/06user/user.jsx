import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams();
    return (
        <div class="flex items-center justify-center w-5/5">
        <div  class="text-center"className='bg-gray-600 text-white text-3xl p-4 '>
           User: {userid} 
        </div>
        </div>
    )
}

export default User
