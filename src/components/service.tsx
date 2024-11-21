import { carouselItems } from "@/lib/carouselData";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./button";
import { Carousel } from "./carousel";


const listData = [
  {
    id: 1,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit, cumque magnam consectetur aut ex minima ",
    image: "/p1.png"
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit, cumque magnam consectetur aut ex minima ",
    image: "/p2.png"
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit, cumque magnam consectetur aut ex minima ",
    image: "/p3.png"
  }
]


export const Service = React.forwardRef((props, ref) => {
  return (
    <section ref={ref as React.Ref<HTMLElement>} className="flex flex-col min-h-screen text-[#B16B23] ">
      <div className="mx-[15rem] mt-[10rem]">
        <div>

          <div className="w-[25rem] space-y-10 ml-5 mb-20">
            <h1 className="text-5xl font-bold">Service</h1>
            <p className="text-[#B16B23]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos assumenda iste at</p>
          </div>
          <div className="w-full">
            <Carousel items={carouselItems} />
          </div>
        </div>
        <div className="h-screen flex text-2xl mt-24 ">
          <div className="h-full w-full ">
            <div className="w-[35rem]">
              <h4 className="text-4xl font-bold mb-10 text-[#764717]">Lorem Ipsum</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero reprehenderit, cumque magnam consectetur aut ex minima </p>
            </div>
            <div className="mt-20">
              <div className="flex flex-col gap-10">
                {
                  listData.map(({ id, title, description, image }) => (
                    <div key={id} className="flex justify-between items-center">
                      <div className="w-[12rem] h-[8rem] shrink-0 relative mr-4">
                        <Image
                          fill
                          alt="pic 1"
                          src={image}
                        />
                      </div>
                      <div className="flex flex-col justify-between gap-y-6">
                        <h4 className="text-3xl">{title}</h4>
                        <p>{description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="flex justify-end mt-10">
                <Button className="space-x-5 bg-[#B16B23] text-white ">Details <ArrowRightCircle /></Button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center border-7 border-blue-900">
            <div className="h-[50rem] w-[30rem] rounded-3xl relative p-5 ">

              <Image
                className="rounded-3xl"
                fill
                alt="outerior"
                src="/out.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});
Service.displayName = "Service";