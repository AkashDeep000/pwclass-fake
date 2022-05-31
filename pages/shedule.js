import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios"
import { getCookie, checkCookies, removeCookies, setCookies } from 'cookies-next'
//import { connectToDatabase } from "../util/mongodb";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

import {useState, useRef, useEffect} from "react"

export default function Home({data}) {
  const router = useRouter()
  const {num} = router.query

  const [number, setNumber] = useState(num)
  const [name, setName] = useState("")
  const [addr, setAddr] = useState("")
  const [isSubmited, setIsSubmited] = useState(false)
  const [submitState, setSubmitState] = useState("idle")
  
  const numberRef = useRef()
  const addrRef = useRef()
  const nameRef = useRef()
  
  const submited = checkCookies("submited")
  
  const handleSubmit = async () => {
    console.log(number?.length)
    if (number?.length != 10) {
      
      
      numberRef.current.style.border = "2px solid #fecdd3"
      numberRef.current.style.padding = "0.875rem"
    } 
    if (!name) {
      
      nameRef.current.style.border = "2px solid #fecdd3"
      nameRef.current.style.padding = "0.875rem"
    } 
    if (!addr) {
      
      addrRef.current.style.border = "2px solid #fecdd3"
      addrRef.current.style.padding = "0.875rem"
    } 
    
    
    if (number?.length === 10 && addr && name && submitState != "completed") {
      setSubmitState("loading")
      const submit = await axios({
          method: 'post',
          url: "/api/shedule",
      data: {number: number}
    }).then((data) => {
      console.log(data)
      if (data.status == 200) {
        setSubmitState("completed")
        setCookies("submited", true)
      } else {
       setSubmitState("failed") 
      }
    })
    
    }
    
  }
  useEffect(() => {
     if (number && number?.length === 10){
      
      numberRef.current.style.border = "none"
      numberRef.current.style.padding = "1rem"
    }
    if (number?.length > 10) {
      setNumber(number?.substring(0,10))
    }
  },[number])
  
  useEffect(() => {
     if (name){
      nameRef.current.style.border = "none"
      nameRef.current.style.padding = "1rem"
    }
  },[name])
  
  useEffect(() => {
     if (addr){
      addrRef.current.style.border = "none"
      addrRef.current.style.padding = "1rem"
    }
  },[addr])
  
  useEffect(() => {
    if (submited) {
      setIsSubmited(true)
    }
  },[number,name, addr, setIsSubmited, submited])
  
  
  return (
    <>
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
    <Header/>
    <div className="w-full">

 <div className="grid place-items-center">
    <div className="max-w-[100ch] grid px-8 pt-10 md:grid-cols-[40%,60%] center place-items-center">

  
  <h4 className=" w-full text-xl md:text-3xl font-bold  text-slate-700 text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500">Fill up the form bellow. We will call you shortly.
</h4>
<div className="py-4">

<div className="flex">
  <span className="shadow-[0_0_1rem_rgba(0,25,49,0.1)] inline-flex items-center px-3 text-sm text-slate-700 bg-slate-200 border border-r-0 rounded-l-sm">
    +91
  </span>
  <input ref={numberRef} onChange={(e) => setNumber(e.target.value)} value={number} id="number" type="number" className="focus:border-2 focus:p-3.5 focus:border-slate-300 focus:outline-0 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none" placeholder="Enter Mobile Number"/>
</div>
  <input ref={nameRef} onChange={(e) => setName(e.target.value)} value={name} type="text" className="mt-6 focus:border-2 focus:p-3.5 focus:border-slate-300 focus:outline-0 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none" placeholder="Enter Your Full Name"/>
  <input ref={addrRef} onChange={(e) => setAddr(e.target.value)} value={addr} type="address" className="focus:border-2 focus:p-3.5 focus:border-slate-300 focus:outline-0 mt-6 shadow-[0_0_1rem_rgba(0,25,49,0.1)] rounded-none rounded-r-sm bg-white text-gray-900 focus:ring-blue-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-4 flex:outline-none text-slate-700" placeholder="Enter Your Your Address"/>

<button onClick={handleSubmit} className="mt-5 p-3 text-white shadow-[0_0_.4rem_rgba(0,25,49,0.071)] bg-gradient-to-r from-[#7a6ded] to-purple-500 rounded font-bold text-xl text-centet w-36 md:w-40">
{submitState == "loading" && submitState != "failed"?
   <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="rgba(255,255,255,0.792)"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="rgb(255,255,255)"/>
</svg>
: submitState == "failed" ?
"Try Again"
: submitState == "completed" ?
"Submited"
: isSubmited ?
"Re-Submit"
: "Submit"
}

</button>
{isSubmited ?
  <h4 className=" w-full pt-4 text-lg md:text-3xl  text-slate-700 text-transparent bg-clip-text bg-gradient-to-r to-[#7a6ded] from-purple-500">You have Submited the form. We will contact you shortly.
</h4>
: null}
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