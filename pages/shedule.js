import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCookie, removeCookies, setCookies } from 'cookies-next'
//import { connectToDatabase } from "../util/mongodb";
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home({data}) {
  
  return (
    <>
    <div className="grid grid-rows-[auto_1fr_auto] h-[100vh]">
    <Header/>
    <div className="w-full">

 <div className="grid place-items-center">
    <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[40%,60%] center place-items-center">

  
  <h4 className=" w-full text-xl md:text-3xl font-bold  text-slate-700 text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500">Fill up the form bellow we will call you soon.
</h4>
<div className="py-4">

<div className="flex">
  <span className="shadow-[0_0_1rem_rgba(0,25,49,0.1)] inline-flex items-center px-3 text-sm text-slate-700 bg-slate-200 border border-r-0 rounded-l-sm">
    +91
  </span>
  <input id="number" type="number" className="shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none" placeholder="Enter Mobile Number"/>
</div>
  <input type="text" className="mt-6 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none" placeholder="Enter Your Full Name"/>
  <input type="address" className="mt-6 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none text-slate-700" placeholder="Enter Your Your Address"/>
<Link href="/shedule">
<button className="mt-5 p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold text-xl">
Submit
</button>
</Link>
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