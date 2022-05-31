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
    <div className=" w-full">
 <div className="grid place-items-center">

<h2 className="pt-6 text-3xl font-bold  text-slate-700 ">
Contact Us
</h2>
<p className="text-slate-700 px-6 py-4 text-xl w-11/12 max-w-[60ch]">
<span className="text-slate-700 text-2xl font-bold">
PWclass
</span>
<br/>
<br/>
10th mile (near bus-stand)
<br/>Shibrampur, Namkhana
<br/>South 24 Parganas
<br />West Bengal, 743357
<br/>
<br/>
<span className="font-bold">contact.pwclass@gmail.com</span>
</p>
  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}




//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details