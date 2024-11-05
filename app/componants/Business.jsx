"use client"
import { useStore } from "../Store/Data";
import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Business() {
  const dataServicesHome = useStore(state => state.DatadataServicesHome)

  return (
    <div className="mt-36 mb-56">
      <div className="w-full h-[200px] bg-black text-white font-bold flex justify-center items-center text-3xl">
        <h1>Our services</h1>
      </div>
      <div className="flex flex-wrap container justify-center gap-10 -mt-10">
        {dataServicesHome.map((box) => {
          return (
            <div
              key={box.id}
              className="w-[330px] overflow-hidden rounded-lg border-2 relative mb-8 transition-all cursor-pointer hover:-translate-y-4 hover:border-zinc-800 hover:shadow-2xl"
            >
              <h3 className="p-2 font-bold text-2xl bg-white rounded-lg">
                {box.title}
              </h3>
              <Image
                src={box.image}
                className="w-[100%] max-h-[100%]"
                alt="Picture of the author"
                priority 
              />
              <Link href={`/${box.id}`}><div className="p-3 cursor-pointer bg-black rounded-md hover:bg-zinc-800 text-white font-bold absolute bottom-1 left-1/2 -translate-x-1/2">
                Details
              </div></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
