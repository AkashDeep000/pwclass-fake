import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCookie, removeCookies, setCookies } from 'cookies-next'
//import { connectToDatabase } from "../util/mongodb";
import {useState, useRef, useEffect} from "react"
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home({data}) {
  
  
  const [number, setNumber] = useState("")
  const numberRef = useRef()
  const router = useRouter()
  
  const handleSubmit = async () => {
    console.log(number.length)
    if (number.length != 10) {
      numberRef.current.style.border = "2px solid #fecdd3"
      numberRef.current.style.padding = "0.875rem"
    } 
   if (number.length === 10) {
      router.push(`/shedule?num=${number}`)
    }
  }
  useEffect(() => {
     if (number && number.length === 10){
      numberRef.current.style.border = "none"
      numberRef.current.style.padding = "1rem"
    }
     if (number.length > 10) {
      setNumber(number.substring(0,10))
    }
  },[number])
  
  return (
    <>
  
    <div className="grid grid-rows-[auto_1fr_auto] min-h-full">
    <Header/>
    <div>
 <div className="grid place-items-center">
    <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[55%,45%] center place-items-center">
<div className="">
<Image
src="/student2.png"
width="800"
height="288.6"
alt=""
priority
/>
</div>
<h2 className="p-8 md:pr-2 pt-12 text-3xl font-bold  text-slate-700 ">
Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">affordable</span>
<br/>coaching centre that<br/>cares about you.
</h2>
  </div>  
  
  <div className="w-full max-w-[100ch] grid px-16  md:grid-cols-[55%,45%] place-items-center">
  <h4 className=" w-full text-xl font-bold  text-slate-700 text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500">Book a free class now...
</h4>
<div className="py-4">
<div className="flex">
  <span className="shadow-[0_0_1rem_rgba(0,25,49,0.1)] inline-flex items-center px-3 text-sm text-slate-700 bg-slate-200 border border-r-0 rounded-l-sm">
    +91
  </span>
  <input ref={numberRef} onChange={(e) => setNumber(e.target.value)} value={number} type="number" className="focus:border-2 focus:p-3.5 focus:border-slate-300 focus:outline-0 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none" placeholder="Enter Mobile Number"/>
</div>

<button onClick={handleSubmit} className="mt-5 p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold text-xl">
Schedule Now
</button>

</div>
  </div>
  
 <div className="grid place-items-center">
    <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[55%,45%] md:pt-16 center place-items-center">

<div className="md:order-2">
<Image
src="/math.jpg"
width="1200"
height="770"
alt=""
priority
/>
</div>

<h2 className="p-8 pt-12 text-2xl font-bold  text-slate-700 ">
Crack your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">JEE / NEET</span>
<br/>exam with your<br/>highly Passionate Teacher.
</h2>


  </div>  
  </div>
  
  
 <div className="grid place-items-center">
    <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[55%,45%] md:pt-16 center place-items-center">
    
<div className="">
<Image
src="/student1.jpg"
width="1200"
height="900"
alt=""
priority
/>
</div>

<h2 className=" p-8 pt-12 text-2xl font-bold  text-slate-700 ">
Book our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Offline</span>
<br/>course at the coaching centre.<br/>
<span className="text-sm">Namkhana, South 24 Parganas</span>
<Link href="/shedule">
<button className="mt-5 p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold text-xl">
Book Mow
</button>
</Link>
</h2>


  </div>  
  </div>
  
 <div className="grid place-items-center">
   <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[55%,45%] md:pt-16 center place-items-center">
<div className="md:order-2">
<Image
src="/online.jpg"
width="1200"
height="900"
alt=""
priority
/>
</div>

<h2 className="p-8 pt-12 text-2xl font-bold  text-slate-700 md:order-1">
Buy our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Online</span>
<br/>course to study from anywhere.<br/>
<span className="text-sm">Recorded video and Live class on video call</span><br/>
<Link href="/shedule">
<button className="mt-5 p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold text-xl">
Buy Mow
</button>
</Link>
</h2>

  </div>  
  </div>
  
  
  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}

export const getServerSideProps = async ({ req, res }) => {
   const token = await getCookie('access_token', { req, res});
    
   const number = await getCookie('number', { req, res});
   const isSubscribed = await getCookie('isSubscribed', { req, res});
  

return ({props: {}})
}
//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details