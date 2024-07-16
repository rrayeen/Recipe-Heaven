'use client'
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default  function Slider() {
  const pictures: string[] =useMemo(()=> [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1601315379734-425a469078de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],[]);
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Assuming 3 images
    }, 4000); // Change image every 4 seconds (4000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [pictures]); // Empty dependency array to run effect only once

  const slides = useMemo(()=>pictures.map((el, i) => (
    <div
      className={`relative ${myIndex!==i ?'hidden':' block'} opacity-100 lg:flex-[0.60]  flex-[0.95] sm:flex-[0.85] md:flex-[0.75] xl:flex-[0.65] hover:z-10  transition-all h-96 hover:scale-110   `}
      key={i}
    >
      <Image
        src={el}
        fill
        className="object-cover cursor-none rounded-lg"
        alt={el}
      ></Image>
    </div>
  )),[pictures,myIndex])
  return (
    <div id="slider" className=" p-8  flex items-center  justify-center ">
      {slides}
    </div>
  );
}
