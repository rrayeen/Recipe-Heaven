"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Pagination } from "../components/Pagination";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface RecipesListProps {
  recipes: recipe[];
}
interface recipe {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export const RecipesList: FC<RecipesListProps> = ({ recipes }) => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(0);

  const recipesList: recipe[] = recipes.slice(page * 10, page * 10 + 9);
  const recipesLength: number = recipes.length;

  if (recipes.length === 0)
    return (
      <div className="flex items-center justify-center p-32 ">
        {searchParams.get("search")
          ? `There is no recipe with ${searchParams.get("search")}`
          : "Start Searching 🍕"}
      </div>
    );
  return (
    <>
      <div className="p-14 grid gap-x-14 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-rows-3">
        {recipesList.map((el, i) => (
          <div key={i} className="shadow-2xl h-96 rounded-2xl overflow-hidden ">
            <Link href={`/recipes/recipe?id=${el.id}`}>
              <div className="relative h-3/4    w-full">
                <Image
                  src={el.image_url}
                  fill
                  className="object-cover cursor-pointer"
                  alt="image"
                  quality={100}
                  sizes="(max-width: 100%), (max-width: 80%)"
                ></Image>
              </div>
            </Link>
            <div className="border-t py-3 text-center  bg-third tracking-wider px-2 h-full border-black">
              {el.title} by{" "}
              <span className="font-bold italic">{el.publisher}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        setPage={setPage}
        recipesLength={recipesLength}
        page={page}
      ></Pagination>
    </>
  );
};
