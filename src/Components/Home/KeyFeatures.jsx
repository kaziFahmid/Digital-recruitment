import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function KeyFeatures() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className='mt-40'>

      <h1 className='text-4xl text-center '>Key <span className='text-emerald-600 font-semibold'>Features</span></h1>

      
      <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-9 grid-cols-1 mt-16">
  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl">Advanced Job <span className='text-emerald-600 '>Posting</span></h3>
    <p className='mt-3'>Effortlessly post job openings and reach qualified candidates</p>
  </div>
  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl">Smart Candidate <span className='text-emerald-600'>Matching</span></h3>
    <p className='mt-3'>Find the best-fit candidates based on skills, experience, and qualifications</p>
  </div>
  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl">Automated Screening <span className='text-emerald-600'>Process</span></h3>
    <p className='mt-3'>Save time by automating the initial candidate screening and shortlisting</p>
  </div>
  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl">Collaborative <span className='text-emerald-600'>Hiring Workflow</span></h3>
    <p className='mt-3'>Efficiently collaborate with hiring teams, schedule interviews, and provide feedback</p>
  </div>



  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl">Best Search <span className='text-emerald-600'>Functionality</span></h3>
    <p className='mt-3'>Efficiently hiring teams can search the best candidates</p>
  </div>

  <div className="feature hover:-translate-y-4 hover:bg-slate-800 hover:text-white  duration-300 bg-white mx-auto max-w-sm shadow-lg p-10 rounded-lg text-center">
    <h3 className="text-2xl"> The Best <span className='text-emerald-600'>user friendly</span></h3>
    <p className='mt-3'>The Best user Friendly Platform, easily great responsive</p>
  </div>
</div>
      

    </div>
  )
}
