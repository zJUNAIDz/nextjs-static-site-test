import localFont from "next/font/local";
import React from "react";
const goBoldHollow = localFont({
  src: "../app/fonts/GoboldHollow.otf",
  variable: "--font-gobold-hollow",
  weight: "100 900",
});
export const Hero = React.forwardRef((_props, ref) => {

  return (
    <section ref={ref as React.Ref<HTMLElement>} className="relative h-screen w-screen bg-[url('/monochrome-bedroom.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 flex flex-col items-start justify-center space-y-10">
        <div
          className={`${goBoldHollow.className} bg-slate-100 text-slate-500 text-7xl opacity-85 h-[20rem] w-[45rem] flex justify-center items-center pl-14`}
        >
          This is our Inheritance Service
        </div>
        <div className="h-[20rem] w-[45rem]  text-white text-4xl flex justify-center items-center bg-opacity-50 font-extrabold p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sunt cumque veritatis! Ullam, quia, voluptate vero dolorem
        </div>
      </div>
      <div className="absolute right-0 bottom-0 h-[15rem] w-[40rem] bg-[#f3a95f] opacity-90 text-white text-3xl flex justify-start items-center pl-8">
        <ul>
          <li>Tel: 000 0000 000</li>
          <li>Location: 46 linden street, Riverdale</li>
          <li>Contact: abc@gmail.com</li>
        </ul>
      </div>
    </section>
  );
})
Hero.displayName = "Hero";