import React from 'react';

const Contact = () => {
  return (
       <div className=' text-center bg-[url("https://ares.shiftdelete.net/2021/10/iphone-13-pro-jailbreak-ile-1-dakikada-kirildi1.jpg")] bg-repeat-round'>
        <h1 className='font-semibold text-3xl p-[15px] text-yellow-700'>CONTACT US</h1>
        <p className='font-semibold text-white'>FEEL FREE TO SEND US A MESSAGE NOW!</p>
        <div className='mx-[25px] pt-[50px] space-x-8'>
       <label className='font-semibold text-3xl text-red-900'>First Name</label>
        <input className='border-x-4 border-y-4 h-[50px] w-[200px] border-amber-300 rounded circle' type="text" placeholder='Your Name'></input>
        <label className='font-semibold text-3xl text-red-900'>Surname</label>
        <input className='border-x-4 border-y-4 h-[50px] w-[200px] border-amber-300 rounded circle' type="text" placeholder='Your surname'></input>
       </div>

       <div className='mx-[25px] my-[25px] pt-[50px] space-x-8'>
       <label className='font-semibold text-3xl text-red-900'>Email</label>
        <input className='border-x-4 border-y-4 h-[50px] w-[200px] border-amber-300 rounded circle' type="text" placeholder='Enter Your email'></input>
        <label className='font-semibold text-3xl text-red-900'>Phone Number</label>
        <input className='border-x-4 border-y-4 h-[50px] w-[200px] border-amber-300 rounded circle' type="text" placeholder='Enter Your Number'></input>
        </div>
       
       
       
       <div className='space-x-8 pt-[50px] pb-[30px] '>
        <div className=' flex flex-row items-center justify-center'>
      
        <label  className='font-semibold text-3xl  text-red-900 pr-[15px]'>Message</label>
        
        <textarea className='h-[200px] w-[300px] border-x-4 border-y-4 border-amber-300 rounded circle '></textarea>
       

        <button className=' bg-orange-600 m-[50px]  rounded circle h-[50px] w-[100px] ' type="button"> Submit </button>
        </div>
        </div>
       </div>
  );
  
};

export default Contact;