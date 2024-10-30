'use client'
import Card from "@/components/card";
import Titles from "@/components/titles";
import { education, titles , Certifications , tags} from "@/constant/index";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Skills from "@/components/Skills";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-2 lg:px-20 flex gap-10">
      <div className="mt-10 flex flex-col px-10 sticky">
        <h1 className="font-bold text-3xl">Walid El Abad</h1>
        <h2 className="mt-2 font-semibold opacity-60">Junior Software Engineer</h2>
        <p className="mt-4 mb-4 font-normal text-sm opacity-25 max-w-[250px]">
          I create precise, captivating, and accessible digital experiences for ambitious projects.
        </p>

        {titles.map((title, index) => (
          <div className="uppercase tracking-wider text-[14px]" key={index}>
            <Titles
              title={title}
              isactive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm opacity-50 mt-10 max-w-lg">
        I am an ambitious junior software engineer with a passion for crafting innovative and efficient solutions. With a strong foundation in programming and a keen eye for detail, I thrive on tackling challenging projects that push my skills to new heights. I am eager to learn and collaborate with others, constantly seeking opportunities to grow and contribute to impactful software development. My goal is to create user-friendly applications that enhance digital experiences and make a positive difference in the tech world.
        </p>

        {education.map((edu, index) => (
          <Card 
            key={index}
            title={edu.title}
            time={edu.time}
            subtitle={edu.subtitle || ""}
          />
        ))}

        <div className="mt-10 flex gap-10 items-center">
          <Link href="/">
            <div className="flex items-center text-sm gap-2 hover:underline">
              <p className="">View Full Résumé</p>
              <Image src="/arrow-right.svg" alt="arrow right" width={15} height={15} />
            </div>
          </Link>
        </div>

        {Certifications.map((cer, index) => (
          <Card 
            key={index}
            title={cer.title}
            time={cer.time}
            subtitle={cer.subtitle || ""}
          />
        ))}
        <div className="mt-10">
        <h1 className="justify-center  flex text-[16px] font-semibold">Programming Languages</h1>
        <div className="gap-2 flex mt-4 flex-wrap text-center max-w-sm justify-center  ">
          {tags.map((tag, index) => ( 
          <Skills 
            key={index}
            name={tag}  
          />
        ))}
        </div>
        </div>
        <div className="mt-10">
        <h1 className="justify-center  flex text-[16px] font-semibold">Libraries & Frameworks</h1>
        <div className="gap-2 flex mt-4 flex-wrap text-center max-w-sm justify-center  ">
          {tags.map((tag, index) => ( 
          <Skills 
            key={index}
            name={tag}  
          />
        ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}
