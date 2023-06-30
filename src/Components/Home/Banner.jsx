import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Banner() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className=' container text-start py-40  bg-contain  bg-left bg-no-repeat md:bg-right bg-[url("https://i.ibb.co/LdJfXPr/pngwing-com.png")]'>
     <div  className='md:ms-20 ' data-aos="fade-down">
     <h1  className='md:text-7xl text-3xl text-black md:text-slate-700'>The Best Digital <span className='text-emerald-600'>Recruiter App</span></h1>
      <p className='mt-7 md:text-lg text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, a dicta? Quo obcaecati id sit, molestias rerum ratione et consequuntur, dolores iusto ipsa iure, dignissimos ipsum. Incidunt temporibus fugiat iste eum totam voluptas nobis, reiciendis rem saepe odio, laboriosam odit.</p>

      <div className='text-start mt-5' >
      <button className="btn bg-slate-700 px-8 text-white">Explore</button>
      </div>
     </div>

    </div>
  )
}
