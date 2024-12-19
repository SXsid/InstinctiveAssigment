import  { ReactNode } from 'react'

function Card({children}:{children:ReactNode}) {
  return (
    <div className='bg-white w-full mt-4 p-5 rounded-xl'>
      {children}
    </div>
  )
}

export default Card
