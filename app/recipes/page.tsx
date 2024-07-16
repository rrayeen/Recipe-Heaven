import { Suspense } from "react";
import { RecipesHeader } from "../components/RecipesHeader";
import { RecipesList } from "./RecipesList";
import { auth } from "../_lib/auth";
import LinksButton from '@/app/components/LinksButton'


interface recipe {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export const metadata = {
title:'Recipes'
}
export default async function Page({ searchParams }: { searchParams: string }) {

  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams.search}&key=${process.env.KEY}`
  );

  const data = await res.json();
  const sesson = await auth();

  const recipes: recipe[] = data.data.recipes;

  return (
    <>
      <RecipesHeader sesson={sesson}></RecipesHeader>
      
      <LinksButton direction="/">Landing Page  </LinksButton>
      <Suspense fallback={<p className="text-3xl">Loading...</p>}>
        <RecipesList recipes={recipes}/>
      </Suspense>
    </>
  );
}
