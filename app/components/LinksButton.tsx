import Link from "next/link";

export default function GoBackMainPage({children,direction='/'}:{children:string,direction:string}){
return <div className=" flex items-center text-primary font-semibold tracking-wider justify-center  w-full">
<Link className="hover:bg-primary hover:outline hover:shadow-xl duration-200 hover:shadow-primary text-primary font-bold tracking-wider hover:animate-pulse outline-0 hover:outline-secondary hover:text-lg hover:text-third hover:outline-2 my-10 bg-third py-4 px-3 rounded-full" 
href={`${direction}`}>
    {children}
</Link>
</div>

}




