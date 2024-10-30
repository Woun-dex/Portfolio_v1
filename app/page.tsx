'use client'
import Titles from "@/components/titles";
import { titles } from "@/constant/index";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Manage active state based on index

  return (
    <div className="p-6 lg:px-28">
      <div className="mt-10 ml-10 flex flex-col">
        <h1 className="font-bold text-4xl">Walid El Abad</h1>
        <h2 className="mt-2 font-semibold opacity-60">Junior Software Engineer</h2>
        <p className="mt-4 mb-4 font-normal text-sm opacity-25 max-w-[250px]">
          I create precise, captivating, and accessible digital experiences for ambitious projects.
        </p>

        {titles.map((title, index) => (
          <div className=" uppercase tracking-wider text-[14px]" key={index}>
            <Titles 
              title={title}
              isactive={activeIndex === index} 
              onClick={() => setActiveIndex(index)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
