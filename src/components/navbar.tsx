"use client"
import { cn } from "@/lib/utils";
import React from "react";
import Button from "./button";
const navigations = [
  {
    id: "home",
    name: "Home",
    link: "#home",
  },
  {
    id: "service",
    name: "Service",
    link: "#service",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    id: "company",
    name: "Company",
    link: "#company",
  },
  {
    id: "about",
    name: "About",
    link: "#about",
  }
]
interface NavbarProps {
  activeSection: string;
  onChange: (section: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ activeSection, onChange }) => {

  return <nav className=" flex justify-between items-center px-5 py-5 bg-transparent/5">
    <div className="">
      <h1 className=" text-[#B16B23] font-bold text-3xl">LOGO</h1>
    </div>
    <ul className=" flex justify-center items-center gap-4 mr-20">
      {
        navigations.map(navigation => (
          <li key={navigation.id} className="text-xl">
            {/* <Link> */}
            <Button variant="ghost" onClick={() => { onChange(navigation.name) }} className={cn("text-xl p-6",
              activeSection === navigation.name ? "bg-[#B16B23] text-white" : "bg-transparent text-[#B16B23]"
            )}>{navigation.name}</Button>
            {/* </Link> */}
          </li>
        ))
      }
      <div className="ml-10" onClick={() => { onChange("Contact") }}>
        <Button className="bg-[#B16B23] p-6 text-xl">Contact</Button>
      </div>
    </ul>
  </nav>
}

export default Navbar;