import Image from "next/image";
import React from "react";
import { List } from "./list";

export const Company = React.forwardRef((props, ref) => {
  return (
    <section ref={ref as React.Ref<HTMLElement>}>
      <div className="mx-[15rem] my-[10rem] text-[#B16B23]">
        <div className="space-y-10 mb-20">
          <h4 className="text-5xl font-bold">Company</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="text-3xl font-bold">
            <span>Speech of the Manager</span>
          </div>
        </div>
        <div >
          <div className="flex justify-center items-center ">
            <figure className="flex flex-col justify-center items-center mr-5">
              <div className="relative h-[20rem] w-[20rem] rounded-full">
                <Image
                  fill
                  className="rounded-full"
                  alt="Linus Torvalds"
                  src="/linus.jpeg"
                />
              </div>
              <figcaption className="flex flex-col justify-center items-center">
                <div>Founder of Linux</div>
                <div className="text-4xl font-bold">Linus Torvalds</div>
              </figcaption>
            </figure>
            <div>
              Linus Torvalds is the creator of the Linux operating system, which is widely used in servers, supercomputers, and embedded devices. He is known for his dedication to open-source software and his contributions to the development of free and open-source software.
              <br />
              <br />
              Torvalds was born in Helsinki, Finland, on 28 December 1969, the son of journalists Anna and Nils Torvalds,[6] the grandson of statistician Leo Törnqvist and of poet Ole Torvalds, and the great-grandson of journalist and soldier Toivo Karanko. His parents were campus radicals at the University of Helsinki in the 1960s.
            </div>
          </div>

          <div className="flex justify-center items-center">

            <div>
              Warren Togami is the creator of the Fedora Linux distribution, which is widely used in servers, supercomputers, and embedded devices. He is known for his dedication to open-source software and his contributions to the development of free and open-source software.
              <br />
              <br />
              Warren is best known as the creator of the Fedora Project during 2002 as his BS Computer Science
              capstone. Fedora grew into one of the world&apos;s largest Open Source projects and force multiplier of Red
              Hat R&D during the 2000&apos;s. This played an important role in early Linux quickly progressing from
              hobbyist volunteer side-projects to out-compete the previously entrenched enterprise Unix market.
            </div>
            <figure className="flex flex-col justify-center items-center ml-5">
              <div className="relative h-[20rem] w-[20rem] rounded-full">
                <Image
                  fill
                  className="rounded-full"
                  alt="Warren Togami"
                  src="/warren.jpeg"
                />
              </div>
              <figcaption className="flex flex-col justify-center items-center">
                <div>Creator of Fedora Linux</div>
                <div className="text-4xl font-bold">Warren Togami</div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <List />
        </div>
      </div >
    </section >
  )
});
Company.displayName = "Company";