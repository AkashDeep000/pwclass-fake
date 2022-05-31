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
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
    <Header/>
    <div className=" w-full">
 <div className="grid place-items-center">

<div className="text-slate-700 text-xl w-11/12 pt-8">
<Image
src="/under-constraction.jpg"
height={800}
width={1200}
alt=""
priority
/>
</div>
  <h4 className="p-8 text-2xl font-bold  text-slate-700 text-transparent bg-clip-text bg-clip-text bg-gradient-to-l from-rose-500 to-pink-600">
  This Page is Under Costraction
</h4>
  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}




//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details