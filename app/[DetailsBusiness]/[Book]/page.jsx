"use client";
import Image from "next/image";
import { useStore } from "../../Store/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import supabase from "@/app/config/supabaseClient";

export default function page({ params }) {
  const id = params.DetailsBusiness;
  const idItem = params.Book;
  const date = useRef();
  const type = useRef();

  const dataServicesHome = useStore((state) => state.DatadataServicesHome);
  const addBook = useStore((state) => state.addBook);
  const addBooked = useStore((state) => state.addBooked);
  const data = dataServicesHome.filter((row) => row.id == id);
  const item = data[0].details.filter((one) => one.id == idItem);

  const handellBook = () => {
    if (date.current.value != "" && type.current.value != "") {
      addBook(id, idItem);
      toast.success(`Successfully Book ${item[0].titleDetails}`, {
        autoClose: 1000,
      });
      
        let titleInfo = item[0].titleDetails
        let dateInfo = date.current.value
        let typeInfo = type.current.value
        let waite = true
        let success = false
        let reject = false
      

      const supaAdd = async () => {
        const { data } = await supabase
          .from("Requests")
          .insert([{titleInfo, dateInfo, typeInfo, waite, success, reject}]);
      };

      supaAdd()
    } else if (date.current.value == "" && type.current.value != "") {
      toast.warning("Enter the date");
    } else if (type.current.value == "" && date.current.value != "") {
      toast.warning("Enter the type of facility");
    } else {
      toast.warning("Enter the date");
      toast.warning("Enter the type of facility");
    }
  };

  return (
    <div>
      <div className="w-full mt-[70px] h-[200px] flex-col bg-black text-white font-bold flex justify-center items-center text-3xl">
        <h1>{data[0].title}</h1>
        <h1>Book Now</h1>
      </div>
      <div className="flex mt-[70px] flex-wrap gap-5 p-3 justify-center items-center border-b-2 mx-5 border-b-black">
        <div>
          <h2 className="text-2xl mb-5">
            <span className="font-bold">Service type:</span>{" "}
            {item[0].titleDetails}
          </h2>
          <p>
            <span className="font-bold">Details:</span> {item[0].detailsDetails}
          </p>
        </div>
        <Image
          src={item[0].imageDe}
          className="w-[300px] max-h-[300px] rounded-xl"
          alt="Picture of the author"
          priority
        />
      </div>
      <div className="mt-[30px] mb-96">
        <h2 className="text-center font-bold text-2xl">
          Determine the date of the interview and the type of facility.
        </h2>
        <div className="flex gap-5 flex-wrap justify-center items-center my-28">
          <input
            ref={date}
            type="date"
            placeholder="Enter the date..."
            className="p-2 appearance-none border-2 border-black rounded-lg w-[350px] cursor-pointer"
          />
          <input
            ref={type}
            type="text"
            placeholder="Enter the type of facility..."
            className="p-2 appearance-none border-2 border-black rounded-lg w-[350px]"
          />
        </div>
        <div
          onClick={handellBook}
          className="p-3 cursor-pointer bg-black rounded-md hover:bg-zinc-800 text-white font-bold w-fit mx-auto"
        >
          Save
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
