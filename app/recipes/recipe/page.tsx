import Image from "next/image";
import React, { FC } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";

import { GiConfirmed } from "react-icons/gi";
import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { SignInButton } from "@/app/components/SignInButton";

interface param {
  id: string;
}

interface pageProps {
  searchParams: param;
}
interface ingr {
  quantity: string | null;
  unit: string | null;
  description: string;
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const id = searchParams.id;
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${process.env.KEY}`
  );

  const data = await res.json();
  const sesson = await auth();
  const recipe = data.data.recipe;

  return (
    <div className="py-12 bg-fourth px-20 w-full">
      <div className="px-4 flex items-center justify-between">
        <Link href="/recipes">
          <IoArrowUndoSharp className="text-2xl cursor-pointer rounded-full"></IoArrowUndoSharp>
        </Link>
        {sesson ? (
          <div className="flex items-center gap-5 text-primary font-semibold tracking-wider ">
            <div className="relative w-14 h-14">
              <Image
                src={sesson.user?.image || ""}
                fill
                className="object-cover rounded-full"
                alt="image"
              ></Image>
            </div>
            <span> {sesson.user?.name}</span>
          </div>
        ) : (
          <SignInButton></SignInButton>
        )}
      </div>
      
      <div className="w-full flex items-center justify-center ">
        <div className="relative w-1/2 h-96 mt-12 ">
          <Image
            src={recipe.image_url}
            className=" object-cover rounded-lg"
            fill
            quality={100}
            alt="image"
          ></Image>
        </div>
      </div>
      <div className="px-24 py-20 mt-12   rounded-3xl bg-third">
        <p className="text-center tracking-widest text-5xl py-6 text-red-800">
          {recipe.title}
        </p>
        <div className="flex items-center gap-6 p-10">
          <div className="flex items-center gap-2">
            <CiTimer></CiTimer>
            {recipe.cooking_time} MINUTES
          </div>
          <div className="flex items-center gap-2">
            <RiGroupLine></RiGroupLine>
            {recipe.servings} SERVINGS
          </div>
        </div>
        <div className="w-full grid grid-cols-2 items-center  gap-x-16  gap-y-16 border-t border-b py-10 border-black">
          <p className=" col-span-full text-center text-red-300 text-2xl">
            RECIPE INGREDIENTS
          </p>
          {recipe.ingredients.map((el: ingr, i: number) => (
            <div className="flex items-center gap-4" key={i}>
              <span className="text-xl">
                <GiConfirmed></GiConfirmed>
              </span>
              <p>
                {el.quantity} {el.unit} {el.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12">
          This recipe was carefully designed and tested by{" "}
          <span className="font-semibold"> {recipe.publisher}</span>
        </p>
      </div>
    </div>
  );
};
export default page;
