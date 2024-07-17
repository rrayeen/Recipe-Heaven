"use client";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import PostButton from "./PostButton";
import image from "@/app/img/p2.jpg";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Form({ sesson }: { sesson: any }) {
  
  const [feed ,setFeed]=useState('')
  function post() {
    if(feed.length<10){toast.error('At least 10 characters :(')}
    else{

      setFeed('')
      toast.success('Feedback posted')
    }
    
  }
  return (
    <form
      className="mt-4 bg-third rounded grid grid-rows-5 sm:grid-rows-3 md:grid-cols-2 h-[48rem] md:h-96 2xl:w-2/3 shadow-lg p-4"
    >
      <div className="flex flex-col row-span-2 sm:row-span-2  md:row-span-3 h-full">
        <label htmlFor="feed" className="flex items-center gap-4 mx-4">
          <div className="h-11 w-11 sm:w-14 sm:h-14  relative">
            <Image
              src={sesson.user?.image || ""}
              alt="image"
              fill
              className="object-cover rounded-full"
            ></Image>
          </div>
          What did you think about us {sesson.user?.name} :
        </label>
        <textarea
          name="feed"
          id="feed"
          className="p-4 border rounded-lg resize-none  m-4 h-full shadow-sm "
          placeholder="Give us feedback..."
          value={feed}
          onChange={(e)=>setFeed(e.target.value)}
        ></textarea>
        <div className="p-4 flex items-center gap-3 self-end">
          <LogoutButton></LogoutButton>
          <PostButton submit={post}></PostButton>
          
        </div>
      </div>
      <div className="h-full row-span-3  rounded-lg relative  ">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover rounded-xl"
        ></Image>
      </div>
    </form>
  );
}
