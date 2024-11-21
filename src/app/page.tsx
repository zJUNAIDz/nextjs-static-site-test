"use client"
import { Company } from "@/components/company";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Service } from "@/components/service";
import React from "react";

function Home() {

  const [activeSection, setActiveSection] = React.useState("Home");

  const homeRef = React.useRef<HTMLElement>(null);
  const serviceRef = React.useRef<HTMLElement>(null);
  const portfolioRef = React.useRef<HTMLElement>(null);
  const companyRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  const onChangeHandler = (section: string) => {
    console.log(section);
    setActiveSection(section);
    console.log(section);

    switch (section) {
      case "Home":
        console.log(homeRef.current)
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Service":
        console.log(serviceRef.current)
        serviceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Portfolio":
        console.log(portfolioRef.current)
        portfolioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Company":
        companyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "About":
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="sticky top-0 z-50 bg-white shadow-sm w-screen">
        <Navbar
          activeSection={activeSection} onChange={onChangeHandler}
        />
      </div>
      <Hero
        ref={homeRef}
      />
      <Service
        ref={serviceRef}
      />
      <Portfolio
        ref={portfolioRef}
      />
      <Company
        ref={companyRef}
      />
      <Contact
        ref={contactRef}
      />
      <div className="text-[#B16B23] py-10 flex justify-center items-center">
        Copyright&amp;2024 All Right Reserved
      </div>
    </div>
  )
}

export default Home;