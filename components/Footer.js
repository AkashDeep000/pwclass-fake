import Link from 'next/link'

export default function Header() {
 return (
   <>
   <div className="w-full grid place-items-center bg-[#7a6ded]">
   <div className="w-9/12 max-w-[60ch] float-left text-center text-white">
   <Link href="/about">
   <button className="p-2">
   About us 
   </button>
   </Link>
   <Link href="/contact">
      <button className="p-2">
   Contact us
      </button>
   </Link>
   <Link href="/terms-condition">
      <button className="p-2">
   Terms and condition
      </button>
   </Link>
   <Link href="/privacy-policy">
      <button className="p-2">
   Privacy policy
      </button>
   </Link>
   <Link href="/refund-and-cancellations">
      <button className="p-2">
   Refund and Cancellations
      </button>
   </Link>
   </div>
   </div>
   </>
   )
}