import  { ReactNode } from 'react'

function Card({children}:{children:ReactNode}) {
  return (
    <div className='bg-white w-full lg:mt-4  mt-8 p-5 rounded-xl'>
      {children}
    </div>
  )
}

export default Card
