"use client";

import Image from "next/image";
import Navbar from "./componets/Navbar";
import { Main } from "next/document";
import Heroo from "./componets/Heroo";
import Projects from "./componets/Projects";
import Heading from "./componets/Heading";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import About from "./componets/About";
import AOS from "aos";
import "aos/dist/aos.css";
import{useEffect} from "react";


export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[]);
  return (
  <main>
    <Heroo />
<Projects/>
<Skills/>
<Contact/>
<About/>

  </main>
  );
}
