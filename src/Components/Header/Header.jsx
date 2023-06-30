import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function Header() {
  const{user,logOut}=useAuth()
const[isTrue,setisTrue]=useState(true)
  return (
<>
<div className='bg-slate-700 text-right'>
   <p className='text-white me-5 py-2'>Call us (AU)  1300 400 290</p>
</div>


<div className="navbar  bg-white py-5 text-primary-content">
  <a className="btn btn-ghost normal-case text-xl text-slate-700">Digital <b className='text-emerald-500'>Recruiter</b> </a>

  <details className="dropdown md:hidden block ms-auto">
    
  <summary className="btn" onClick={()=>setisTrue(!isTrue)} >{isTrue?<GiHamburgerMenu/>:"X"}</summary>
  <ul className="absolute  right-0 mt-2 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64 text-black">
    <li  className='mt-5'><Link to="/">Home</Link></li>

    <li  className='mt-5'><Link  to="/candidateSearch">Candidate Search</Link></li>
    <li className='mt-5'>{user?.email?<button onClick={()=>logOut()} className='bg-slate-800 text-white'>Logout</button>:<Link to="/userregistration">User Login and Register Pages</Link>}</li>
  </ul>
</details>

  <ul className='ms-auto text-slate-700  hidden md:flex font-semibold justify-center items-center gap-8'>
  <Link to="/"><li className='hover:text-green-500 duration-300'>Home</li></Link>

{user?.email?  <Link ><li className='hover:text-green-500 duration-300'>  <button className="btn bg-slate-700 px-8 text-white" onClick={()=>logOut()}>Logout</button></li></Link>:  <Link  to="/userregistration"><li className='hover:text-green-500 duration-300'>User Login and Register Pages</li></Link>}


  <Link  to="/candidateSearch"><li className='hover:text-green-500 duration-300'>Candidate Search</li></Link>

      </ul>
</div>







</>
  )
}
