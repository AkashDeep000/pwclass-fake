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
Cancellation and Refund
</h2>
<p className="text-slate-700 px-12 py-4 text-lg max-w-[55ch]">
<h2 className="text-2xl py-4 font-bold">
Cancellation Policy
</h2>
We can cancel your purchacing of our cource if a request is made within 24 hours of placing the order. The request has to be made at contact.pwclass@gmail.com with your email ID and Phone number used during registration or by calling us on +91-7548945778.

<h2 className="text-2xl py-4 font-bold">
Refund Policy
</h2>
All Test Preparation course producuct come with a demo class (online or offline). Within the 10 days of purchacing our course, you can refund the course in case you do not like it.

A Refund Request will be deemed valid only if it is made through an email to contact.pwclass@gmail.com or by calling us on +91-7548945778 within 10 days from purchace.
<br/>
No Refund will be provided after 10 days from purchace.
<br/>
Refunds shall be made to bank account within 7 working days of receipt of products.
</p>
  </div>  
  </div>
  <Footer/>
  </div>
    </>
  )
}




//https://api.penpencil.xyz/v3/batches/6229aba1c906350011f5b73b/details