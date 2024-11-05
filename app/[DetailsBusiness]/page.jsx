"use client";
import Image from "next/image";
import { useStore } from "../Store/Data";
import React from "react";
import Link from "next/link";

export default function page({ params }) {
  let id = params.DetailsBusiness;

  const dataServicesHome = useStore((state) => state.DatadataServicesHome);
  const data = dataServicesHome.filter((row) => row.id == id);

  return (
    <div>
      <div className="w-full mt-[70px] h-[200px] bg-black text-white font-bold flex justify-center items-center text-3xl">
        <h1>{data[0].title}</h1>
      </div>
      <div className="flex flex-wrap container justify-center gap-10 -mt-10">
        {data[0].details.map((box) => {
          return (
            <div
              key={box.id}
              className="w-[330px] overflow-hidden rounded-lg border-2 relative mb-8 transition-all cursor-pointer hover:-translate-y-4 hover:border-zinc-800 hover:shadow-2xl"
            >
              <h3 className="p-2 font-bold text-2xl bg-white">
                {box.titleDetails}
              </h3>
              <p className="bg-white text-center p-2 text-zinc-800">{box.detailsDetails}</p>
              <Image
                src={box.imageDe}
                className="w-[100%] max-h-[100%]"
                alt="Picture of the author"
                priority
              />
              <Link href={`/${data[0].id}/${box.id}`}>
                <div className="p-3 cursor-pointer bg-black rounded-md hover:bg-zinc-800 text-white font-bold absolute bottom-1 left-1/2 -translate-x-1/2">
                Book now
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
