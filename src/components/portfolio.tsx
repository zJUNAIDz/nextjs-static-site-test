import React from "react";
import Image from "next/image";
export const Portfolio = React.forwardRef((props, ref) => {
  return (
    <section
      className="min-h-screen w-screen bg-[#C8954F] text-white px-[10rem] flex justify-center items-center"
      ref={ref as React.Ref<HTMLElement>}
    >
      <div className="h-full w-full flex flex-col justify-around gap-y-10 m-20">

        <div className="space-y-10  mb-10" >
          <h1 className="text-5xl font-bold">Portfolio</h1>
          <p className="w-[45%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos esse voluptates et ea, quaerat nulla cumque beatae ,</p>
        </div>
        <div className="w-full">
          <div className="h-[40rem] w-full flex justify-between ">

            <div className="h-full border-8 w-[50%] border-white-900 relative">
              <Image
                fill
                alt="portfolio1"
                src="/portfolio1.avif"
              />
            </div>

            <div className="h-full ml-5 w-[50%] flex justify-between">
              <div className="h-full w-[48%]  flex flex-col justify-between">
                <div className="h-[48%] w-full border-8 border-white-900 relative">
                <Image
                fill
                alt="portfolio2"
                src="/portfolio2.jpeg"
              />
                </div>
                <div className="h-[48%] w-full border-8 border-white-900 relative">
                <Image
                fill
                alt="portfolio3"
                src="/portfolio3.jpg"
              />
                </div>
              </div>

              <div className="h-full w-[48%] flex flex-col justify-between">
                <div className="h-[48%] w-full border-8 border-white-900 relative">
                <Image
                fill
                alt="portfolio4"
                src="/portfolio4.webp"
              />
                </div>
                <div className="h-[48%] w-full border-8 border-white-900 relative">
                <Image
                fill
                alt="portfolio5"
                src="/portfolio5.webp"
              />
                </div>
              </div>
            </div>

          </div>

          <div className="w-[70%] my-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui eum provident dolorem earum fuga corporis ducimus fugit magnam voluptates exercitationem ipsam molestiae sequi corrupti necessitatibus illo, nostrum explicabo mod Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem fugiat ratione doloremque quod, harum eveniet suscipit tenetur labore excepturi quas dolores, qui ne.</p>
          </div>
        </div>
        <div className="w-[70%]">
          <h4 className="text-3xl font-bold mb-10">Lorem Ipsum</h4>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo consectetur, eos quasi, ut iure sapiente error eligendi nemo eaque libero saepe asperiores maiores iste ratione fugiat</p>
        </div>
      </div>

    </section>
  )
});
Portfolio.displayName = "Portfolio";