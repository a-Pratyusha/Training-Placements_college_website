import React from 'react'

function Marquee() {
  return (
    <div >
      <div className='bg-primary p-1 text-light fw-bold shadow lg:text-2xl text-lg' >
        <marquee behavior="scroll" direction="left">
        Mission- "To impart state of art education and technical expertise to students and give necessary training to teachers to create self reliant society for future."

        </marquee>

      </div>
    
    </div>
  )
}

export default Marquee
