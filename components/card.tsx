import React from 'react'

interface props {
    time: string,
    title: string,
    subtitle: string,
  
}
const Card = ({time , title , subtitle} : props) => {
  return (
    <div id="about" className='mt-4 cursor-pointer p-4 rounded-xl hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5
    hover:bg-white'>
        <div className='flex gap-5'>
            <p className='text-sm opacity-55'>{time}</p>
            <div>
                <h2 className='max-w-[260px] font-bold '>{title}</h2>
                <p className='mt-2  text-sm font-semibold opacity-50 max-w-[260px]'>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Card