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

<h2 className="pt-6 text-3xl font-bold  text-slate-700 ">
About Us
</h2>
<p className="text-slate-700 px-12 py-4 text-lg max-w-[60ch] text-center">
We provide offline and online classes for Class 11th, 12th, JEE, NEET preparation.

PWclass aims at providing quality education to every student regardless of their financial condition at an affordable price. Live classes offline or online, test series, lecture notes, topic wise assignments with best questions, dynamic exercises and much additional.
<br/>
<br/>
We believe that Quality education also could be affordable.
</p>
  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}




//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details