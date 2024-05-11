import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-slate-600 cursor-pointer flex justify-between '> 
     <div className='px-6 mb-0 pt-6 mx-3'>
      <h1 className='text-yellow-500 text-xl border-l-4 p-1 font-semibold'>USEFUL LINKS </h1>
      <ul className='text-white text-center'>
        <li className='p-[5px]'>Home </li>
        <li className='p-[5px]'>Services</li>
        <li className='p-[5px]'>About Us</li>
        <li className='p-[5px]'>Contact </li>
      </ul>
      </div>
      <div className='p-[30px] m-3 '>
          <input className='rounded circle h-[30px] w-[200px] ml-10' type="email" placeholder="Enter Your Email"/>
          <button className='bg-orange-600  ml-3  rounded circle h-[30px] w-[90px]' type="button"> SUBSCRIBE </button>
          <p className='text-yellow-400 text-xl my-4'>Get Connected With Us On Social Networks </p>

        </div>
        <div className='px-6 mb-0 pt-6 mx-3'>
        <h1 className='text-yellow-500 text-xl border-l-4 p-1 font-semibold ml-12'>CONTACT US </h1>
        <ul className='text-white text-center'>
          <li className='p-[5px]'>Kolkata,India</li>
          <li className='p-[5px]'>Official@sisyphusinfotech.com</li>
          <li className='p-[5px]'>+91 9732154525</li>
      </ul>
        </div>
    </footer>
  )
}

export default Footer