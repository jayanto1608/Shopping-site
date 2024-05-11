import React from 'react';

const About = () => {
  return(
    <div>
      <div  className='bg-[url("https://cdn.pixabay.com/photo/2017/10/04/04/19/sky-2815020_1280.jpg")] bg-repeat-round'>
      <div className='text-center font-semibold p-[75px]'>
      <h1 className='text-4xl  text-amber-800'>About Us</h1>
      <p className='text-xl text-white p-[30px]'>WE HAVE OVER 10 YEARS OF EXPERIENCE</p>

    </div>
    </div>
    
    <div className='flex justify-evenly'>
      <div className='p-[72px]'>
      <p style={{color:'#666'}}>LOREM IPSUM DOLOR SIT AMET </p>
      <h1 className= 'font-bold' style={{ fontSize:'35px'}}>Get to know about <span style={{color:'#a4c639'}}> our company</span> </h1>
      <p className='pb-[25px]' style={{color:'#666', fontSize:'15px',lineHeight:'35px'}}>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem.</p>
       <p className='pb-[25px]' style={{color:'#666', fontSize:'15px',lineHeight:'35px'}}>Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>
       <button className='bg-orange-600   rounded circle h-[40px] w-[100px]' type="button"> Read More </button>
       
       </div>
      <img className='p-[75px] ml-[140px]' src="https://demo.phpjabbers.com/free-web-templates/mobile-store-website-template-81/assets/images/about-1-570x350.jpg" alt="test" />
        
    
    </div>
    


    </div>



);
};

export default About;