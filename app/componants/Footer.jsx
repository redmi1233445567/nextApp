import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-black mt-[30px]">
      <div className="flex justify-center text-white gap-10 p-4 items-center">
        <h2 className="font-bold text-2xl">Perfect Scape</h2>
        <ul className="flex gap-3">
          <Link href="/">
            <li className="cursor-pointer p-2">Home</li>
          </Link>
          <Link href="/Requests"><li className="cursor-pointer p-2">Requests</li></Link>

        </ul>
      </div>
      <p className="text-white text-center">
        Created by Ahmed Sayed Copyright © 2024
      </p>
    </div>
  );
}
