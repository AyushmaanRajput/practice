import React from 'react'

export const OpenScreen = ({count}) => {
  return (
    <div className='bg-white absolute top-1/2 left-1/2 font-lg font-bold w-40 h-40 p-8 flex items-center justify-center shadow-lg rounded-xl -translate-x-2/4 -translate-y-2/4 text-4xl' style={{zIndex:10000}}>
        {
            count==1?"Start":
            count -1
        }
    </div>
  )
}

export default OpenScreen
