import React from 'react'

const Map = () => {
  return (
    <div>
        <address className='flex justify-center lg:text-3xl text-xl font-bold mt-10 py-2 bg-slate-400'>Our Address </address>
        <div className='w-full h-full relative pt-5'>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59715.1442860666!2d81.50854554860466!3d20.70224304284776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f287afc831f2f%3A0xa497a5e6b6a755b4!2sDhamtari%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1727853846556!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
    </div>
  )
}

export default Map