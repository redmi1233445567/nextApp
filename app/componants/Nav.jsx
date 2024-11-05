"use client"
import Link from "next/link";
import { useRef } from "react";

export default function Nav() {

   const refUl = useRef();

   const handellNav = () => {
    if (refUl.current.style.display == "flex") {
        refUl.current.style.display = "none"
    }else {
        refUl.current.style.display = "flex "
    }
   }

  return (
    <div className="relative w-full">
      <nav className="flex w-full sm:justify-between flex-wrap bg-black gap-10 p-2 px-28 justify-center  items-center font-medium rounded-b-full rounded-t-md">
        <h1 className="sm:text-3xl text-2xl sm:p-2 font-bold text-white ">Perfect Scape</h1>
        <div onClick={handellNav} className="cursor-pointer hover:animate-pulse">
          <div className="w-8 h-1 bg-white rounded-md mb-1"></div>
          <div className="w-8 h-1 bg-white rounded-md mb-1"></div>
          <div className="w-8 h-1 bg-white rounded-md"></div>
        </div>
      </nav>
      <ul ref={refUl} className="hidden absolute z-40 bg-slate-600/[0.6] gap-4 sm:justify-end justify-center flex-wrap w-full px-20 font-bold transition-all py-2 ">
        <Link href="/"><li className="hover:bg-black hover:text-white cursor-pointer p-2 transition-colors rounded-md">Home</li></Link>
        <Link href="/Requests"><li className="hover:bg-black hover:text-white cursor-pointer p-2 transition-colors rounded-md">Requests</li></Link>
        
      </ul>
    </div>
  );
}
