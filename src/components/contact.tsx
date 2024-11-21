import { ArrowRightCircle, Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Button from "./button";

export const Contact = React.forwardRef((props, ref) => {
  return (
    <section
      className="flex justify-center items-center bg-[#C8954F] text-white   h-[30rem]"
      ref={ref as React.Ref<HTMLElement>}
    >
      <div className="flex gap-x-[10rem] mx-[15rem]">
        <div className="flex flex-col justify-between gap-y-[10rem]">
          <div className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum nulla doloribus, quaerat itaque fuga omnis. Exercitationem, libero cumque provident odit maiores quidem fugit officia totam, rem illo, in beatae!
          </div>
          <div className="">
            <ul className="list-none flex gap-x-8">
              <li className="bg-slate-400 rounded-full p-3"><Facebook /></li>
              <li className="bg-slate-400 rounded-full p-3"><Twitter /></li>
              <li className="bg-slate-400 rounded-full p-3"><Instagram /></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <span className=" font-bold text-3xl self-start">Contact Us</span>
          <form className="flex flex-col gap-y-5 text-lg">
            <div className="flex justify-between gap-10 items-baseline">
              <label htmlFor="name">Name</label>
              <input className="p-2 rounded-lg text-black" type="text" id="name" />
            </div>
            <div className="flex justify-between gap-10 items-baseline">
              <label htmlFor="location">Location</label>
              <input className="p-2 rounded-lg text-black" type="text" />
            </div>
            <div className="flex justify-between gap-10 items-baseline">
              <label htmlFor="tel">Tel</label>
              <input className="p-2 rounded-lg text-black" type="tel" id="tel" />
            </div>

            <div className="flex justify-between gap-10 items-baseline">
              <label htmlFor="email">Email</label>
              <input className="p-2 rounded-lg text-black" type="email" id="email" />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-white text-[#B16B23] hover:bg-[#B16B23] hover:text-white">Submit <ArrowRightCircle /> </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
});
Contact.displayName = "Contact";