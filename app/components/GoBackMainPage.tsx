import Link from "next/link";

export default function GoBackMainPage(){
return <div className=" flex items-center text-primary font-semibold tracking-wider justify-center  w-full">
<Link
  className="my-10 bg-third py-4 px-8 rounded-full"
  href={"/"}
>
 Landing Page
</Link>
</div>

}