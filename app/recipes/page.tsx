import { Suspense } from "react";
import { RecipesHeader } from "../components/RecipesHeader";
import { RecipesList } from "./RecipesList";
import { auth } from "../_lib/auth";
import GoBackMainPage from "@/app/components/GoBackMainPage";

export default async function Page({ searchParams }: { searchParams: string }) {
  interface recipe {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
  }

  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams.search}&key=${process.env.KEY}`
  );

  const data = await res.json();
  const sesson = await auth();

  const recipes: recipe[] = data.data.recipes;

  return (
    <>
      <RecipesHeader sesson={sesson}></RecipesHeader>
      <GoBackMainPage></GoBackMainPage>
      <Suspense fallback={<p>Loading...</p>}>
        <RecipesList recipes={recipes}></RecipesList>
      </Suspense>
    </>
  );
}
