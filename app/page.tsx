'use client'
import Card from "@/components/card";
import Titles from "@/components/titles";
import { education, titles , Certifications , tags, tags2, tags3} from "@/constant/index";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Skills from "@/components/Skills";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTitleClick = (index: number , title:string) => {
    setActiveIndex(index)
    // Scroll to the section with the corresponding ID
    const section = document.getElementById(`${title}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0 flex gap-10">
      <div id="fix_container" className="mt-10 flex flex-col px-10 sticky top-10 h-max">
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
              onClick={() => handleTitleClick(index, title)}
            />
          </div>
        ))}
      </div>

      <div  className="overflow-y-auto">
        <div id="About">
        <p  className="text-sm opacity-50 mt-10 max-w-lg">
        I am an ambitious junior software engineer with a passion for crafting innovative and efficient solutions. With a strong foundation in programming and a keen eye for detail, I thrive on tackling challenging projects that push my skills to new heights. I am eager to learn and collaborate with others, constantly seeking opportunities to grow and contribute to impactful software development. My goal is to create user-friendly applications that enhance digital experiences and make a positive difference in the tech world.
        </p>
        </div>
        <div id="Education">
        {education.map((edu, index) => (
          <Card 
            key={index}
            title={edu.title}
            time={edu.time}
            subtitle={edu.subtitle || ""}
          />
        ))}
        </div>
        

        <div className="mt-10 flex gap-10 items-center">
          <Link href="/">
            <div className="flex items-center text-sm gap-2 hover:underline">
              <p className="">View Full Résumé</p>
              <Image src="/arrow-right.svg" alt="arrow right" width={15} height={15} />
            </div>
          </Link>
        </div>
        
        <div id="Certifications">
        {Certifications.map((cer, index) => (
          <Card 
            key={index}
            title={cer.title}
            time={cer.time}
            subtitle={cer.subtitle || ""}
          />
        ))}
        </div>

       <div id="Skills">
       <div className="mt-10">
        <h1 className="justify-center  flex text-[16px] font-semibold">Programming Languages</h1>
        <div className="gap-2 flex mt-4 flex-wrap text-center max-w-sm justify-center mx-auto  ">
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
        <div className="gap-2 flex mt-4 flex-wrap text-center max-w-sm justify-center mx-auto  ">
          {tags2.map((tag, index) => ( 
          <Skills 
            key={index}
            name={tag}  
          />
        ))}
        </div>
        </div>
        <div className="mt-10">
        <h1 className="justify-center  flex text-[16px] font-semibold">Tools & Database</h1>
        <div className="gap-2 flex mt-4 flex-wrap text-center max-w-sm justify-center mx-auto  ">
          {tags3.map((tag, index) => ( 
          <Skills 
            key={index}
            name={tag}  
          />
        ))}
        </div>
        </div>
       </div>
        
        
      </div>
    </div>
  );
}
