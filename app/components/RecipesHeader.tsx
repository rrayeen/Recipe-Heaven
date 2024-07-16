"use client";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { FC, useCallback, useState } from "react";
import { SignInButton } from "./SignInButton";
import LogoutButton from "./LogoutButton";


interface RecipesHeaderProps {
  sesson: any;
}

export const RecipesHeader: FC<RecipesHeaderProps> = ({ sesson }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState<string>("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function create(formData: FormData) {
    router.push(pathname + "?" + createQueryString("search", search));
  }
  return (
    <div
    className={`w-full py-6 bg-third flex gap-5 items-center px-12 justify-between border-b-2 border-primary shadow-2xl`}
    >
      {sesson ? (
        <div className="flex items-center gap-5 text-primary font-semibold tracking-wider ">
          <div className="relative w-14 h-14">
            <Image
              src={sesson.user.image}
              fill
              className="object-cover rounded-full"
              alt="image"
            ></Image>
          </div>
          <span className="hidden md:block">Welcome, {sesson.user.name}</span>
          <LogoutButton></LogoutButton>
        </div>
      ) : (
        <SignInButton></SignInButton>
      )}

      <div>
        <form action={create}>
          <input
            type="text"
            name="search"
            value={search}
            id="search"
            onChange={(e) => {
              setSearch((value) => (value = e.target.value));
            }}
            required
            placeholder="Search for recipes..."
            className="px-6 py-4 outline-fourth rounded-full  tracking-wider focus:outline-secondary focus:shadow-xl focus:shadow-secondary   outline-none "
          />
        </form>
      </div>
    </div>
  );
};
