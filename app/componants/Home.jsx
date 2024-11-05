import Image from "next/image";
import home from "../../public/home.jpg";

export default function HomePage() {
  return (
    <div>
      <div className="w-full h-[650px] relative ">
        <div className="hover:bg-black hover:text-white hover:transition-all hover:p-8 hover:left-0 w-full sm:w-[60%] h-4/5 shadow-2xl rounded-full absolute z-30 top-1/2 -translate-y-1/2 left-0 sm:-left-36 bg-white flex justify-center flex-col items-center gap-4 p-8 sm:pl-40">
          <h2 className="sm:text-3xl text-2xl sm:p-2 font-bold ">
            Perfect Scape
          </h2>
          <p>
            Our company is your go-to destination for all your contracting
            needs. With extensive experience in the industry, we have proven our
            ability to deliver projects with the highest standards of quality
            and efficiency. Our team of skilled engineers and technicians
            guarantees you an exceptional project that exceeds your
            expectations.
          </p>
        </div>
        <Image
          src={home}
          className="w-[100%] h-[650px] rounded-md absolute top-0 left-0 z-10"
          alt="Picture of the author"
          priority 
        />
      </div>
      <span class="inline-block animate-bounce rounded-full p-4 bg-black text-white text-sm relative z-50 -top-32 left-1/2 -translate-x-1/2">
        <svg
          class="w-6 h-6 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
}
