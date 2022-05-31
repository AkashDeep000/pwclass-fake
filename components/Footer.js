import Link from 'next/link'

export default function Header() {
 return (
   <>
   <div className="w-full grid place-items-center bg-gradient-to-r from-[#7a6ded] to-purple-500  p-4">
   <div className="w-9/12 max-w-[60ch] float-left text-center text-white text-md">
   <Link href="/about">
   <button className="p-2 font-bold">
   About us 
   </button>
   </Link>
   <Link href="/contact">
      <button className="p-2 font-bold">
   Contact us
      </button>
   </Link>
   <Link href="/terms-condition">
      <button className="p-2 font-bold">
   Terms and condition
      </button>
   </Link>
   <Link href="/privacy-policy">
      <button className="p-2 font-bold">
   Privacy policy
      </button>
   </Link>
   <Link href="/refund-and-cancellations">
      <button className="p-2 font-bold">
   Refund and Cancellations
      </button>
   </Link>
   </div>
   </div>
   </>
   )
}