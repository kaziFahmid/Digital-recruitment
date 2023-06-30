import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThreeDots } from 'react-loader-spinner'

export default function Main() {
  const[isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)},4000)
  })
  return (

    <>
{isLoading?<ThreeDots
  height="100vh"
  width="100"
  radius="9"
  color="#4fa94d"
  ariaLabel="three-dots-loading"
  wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }}
  wrapperClassName=""
  visible={true}
/>: <div>
 <Header/>
 <Outlet/>
 <Footer/>

</div>}
    
    </>
   
  )
}
