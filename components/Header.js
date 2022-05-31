import { BiBookReader } from "react-icons/bi";
import {getCookies, removeCookies } from 'cookies-next'
import {useState, useRef, useEffect} from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Header() {
 
const cookies =  getCookies()

const [isLogin, setIsLogin] = useState(false)
const [isSubscribed, setIsSubscribed] = useState(false)

  const router = useRouter()
  
const handleLoginClick = () => {
  if (!isLogin) {
    router.push("/signin")
  } else {
    removeCookies('access_token')
    removeCookies('number')
    removeCookies('isSubscribed')
    router.push("/signin")
  }
}
/*
 useEffect(() => {
   console.log(cookies)
   if (cookies?.access_token) {
     setIsLogin(true)
   }
   if (cookies?.isSubscribed == "true") {
     console.log("in:"+cookies.isSubscribed)
     setIsSubscribed(true)
   }
   console.log("out:"+isSubscribed)
 },[cookies]) 
 */
  return (
    <>

      <div className="backdrop-blur-md grid justify-between grid-cols-[1fr_auto_auto] gap-2 md:gap-6 bg-white/70 sticky top-0 w-full shadow-sm px-2 md:px-10 m py-3 z-50">
        <Link href="/">


      <div className="text-2xl font-bold text-slate-700 font-sans">
<svg width="0" height="0">
  <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#7a6ded" offset="0%" />
    <stop stopColor="#591885" offset="100%" />
  </linearGradient>
</svg> 
              <BiBookReader 
              className="inline w-10 h-10"
              style={{fill: "url(#blue-gradient)" }}/>
      <div className="inline px-1">PWclass </div>


      </div>
      </Link>

    <Link href="/courses">
      <button 
      className="text-purple-500 px-2 font-bold ">
      Courses
      </button>
      </Link>
      <button onClick={handleLoginClick} className="bg-gradient-to-r to-[#7a6ded] from-purple-500 text-white px-3 h-lg font-bold rounded">{isLogin ? "Log Out" : "Sign in"}</button>
       </div>
     </>
  )
}