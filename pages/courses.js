import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCookie, removeCookies, setCookies } from 'cookies-next'
//import { connectToDatabase } from "../util/mongodb";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FcOk } from "react-icons/fc"

export default function Home({data}) {
  
  return (
    <>
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
    <Header/>
    <div className=" w-full">
 <div className="grid place-items-center">


  <h4 className="p-4 text-2xl font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-purple-500 to-pink-600">
  Courses We Provide
</h4>

 <div className="grid w-full place-items-center">
   <div className="max-w-[100ch] w-full grid gap-4 px-4 pt-2 pb-12 md:grid-cols-[50%,50%] md:pt-6 center place-items-center">
   
<div className="p-4 rounded bg-white shadow w-full">
<div className="w-full text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500 mb-4">Complete NEET Preparation</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Scheduled Lectures on Every Topic
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Extra Doubt Solving Sessions Every Weak
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Structured And Targeted Study Material
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Tests On Regular Basis For Progress Tracking
</div>

<div className="grid grid-cols-[auto_auto_auto_1fr_auto] gap-2 pt-6 pb-2">
<div>
<div className="grid gap-2 grid-cols-[auto_1fr] place-items-center">
<div className="w-4 h-4 inline rounded-full bg-gradient-to-r from-[#7a6ded] to-purple-500"></div>
<div className="inline w-full text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7a6ded] to-purple-500">
Offline
</div>
</div>
<div className="text-lg font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-purple-500 to-pink-600">
₹2500 pm
</div>
</div>
<div className="w-1 h-full bg-slate-200"></div>
<div>
<div className="grid gap-2 grid-cols-[auto_1fr] place-items-center">
<div className="w-4 h-4 inline rounded-full bg-gradient-to-r from-[#7a6ded] to-purple-500"></div>
<div className="inline w-full text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7a6ded] to-purple-500">
Online
</div>
</div>
<div className="text-lg font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-purple-500 to-pink-600">
₹700 pm
</div>
</div>

<div></div>
<Link href="/schedule">
<button className="p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold">
Book Now
</button>
</Link>
</div>
</div>
<div className="p-4 rounded bg-white shadow w-full">
<div className="w-full text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500 mb-3">Complete JEE Preparation</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Scheduled Lectures on Every Topic
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Extra Doubt Solving Sessions Every Weak
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Structured And Targeted Study Material
</div>
<div className="py-2 grid grid-cols-[auto_1fr] gap-2">
<FcOk className="w-6 h-6 inline"/>  Tests On Regular Basis For Progress Tracking
</div>

<div className="grid grid-cols-[auto_auto_auto_1fr_auto] gap-2 pt-6 pb-2">
<div>
<div className="grid gap-2 grid-cols-[auto_1fr] place-items-center">
<div className="w-4 h-4 inline rounded-full bg-gradient-to-r from-[#7a6ded] to-purple-500"></div>
<div className="inline w-full text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7a6ded] to-purple-500">
Offline
</div>
</div>
<div className="text-lg font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-purple-500 to-pink-600">
₹2000 pm
</div>
</div>
<div className="w-1 h-full bg-slate-200"></div>
<div>
<div className="grid gap-2 grid-cols-[auto_1fr] place-items-center">
<div className="w-4 h-4 inline rounded-full bg-gradient-to-r from-[#7a6ded] to-purple-500"></div>
<div className="inline w-full text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7a6ded] to-purple-500">
Online
</div>
</div>
<div className="text-lg font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-purple-500 to-pink-600">
₹600 pm
</div>
</div>

<div></div>
<Link href="/schedule">
<button className="p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold">
Book Now
</button>
</Link>
</div>
</div>





  </div>  
  </div>

  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}




//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details