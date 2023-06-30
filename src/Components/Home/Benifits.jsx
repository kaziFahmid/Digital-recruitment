import React from 'react'
import {BiSolidTimeFive} from 'react-icons/bi';
import {BsPeopleFill} from 'react-icons/bs';
import {BsBriefcaseFill} from 'react-icons/bs';
import {BiSolidMessageRounded} from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Benifits() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <section className="benefits mt-40 container mx-auto ">
     <h2 className='text-4xl text-center font-bold'>Benefits</h2>
    <div className="grid md:grid-cols-3 gap-9 grid-cols-1 mt-16">
 
      <div  data-aos="fade-right" className="benefit   bg-transparent  shadow-lg py-6 px-6">

     <div >
     <BiSolidTimeFive className='text-3xl'/>
     </div>
  
        <h3 className='text-xl font-medium mt-2'>Save Time and Effort</h3>
        <p className='mt-2'>Streamline your recruitment process and reduce manual work</p>
      </div>

      <div  data-aos="fade-right" className="benefit  bg-transparent  shadow-lg py-6 px-6">
      <BsPeopleFill className='text-3xl'/>
        <h3 className='text-xl font-medium'>Access to Top Talent</h3>
        <p className='mt-2'>Attract and hire the best candidates for your job openings</p>
      </div>
      <div  data-aos="fade-right" className="benefit  bg-transparent  shadow-lg py-6 px-6">
<BsBriefcaseFill className='text-3xl'/>
        <h3 className='text-xl font-medium'>Improve Hiring Efficiency</h3>
        <p className='mt-2'>Make informed decisions faster and shorten time-to-hire</p>
      </div>
      <div  data-aos="fade-right" className="benefit  bg-transparent  shadow-lg py-6 px-6">
      <BiSolidMessageRounded className='text-3xl'/>
        <h3 className='text-xl font-medium'>Enhanced Collaboration</h3>
        <p className='mt-2'>Efficiently collaborate with hiring teams and streamline the feedback process</p>
      </div>
    </div>
  </section>
  )
}
