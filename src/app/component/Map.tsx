import React from 'react'

const Map = () => {
  return (
    <div>
        <address className='flex justify-center lg:text-3xl text-xl font-bold mt-10 py-2 bg-slate-400'>Our Address </address>
        <div className='w-full h-full relative pt-5'>
        <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.5042923747733!2d86.8597371!3d23.5862406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1718859183352!5m2!1sen!2sin" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Map