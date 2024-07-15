import Link from "next/link";

export default async function Navigation() {
 
  return (
    <>
      <nav className=" sticky top-3 bg-secondary shadow-md shadow-third rounded-full  flex items-center justify-center py-5  ">
        <ul
          className={` tracking-wide text-white font-bold text-xl  flex items-center justify-center gap-24`}
        >
          <li>
            <Link href={"#header"}>About</Link>
          </li>
          <li>
            <Link href={"#main"}>Explore</Link>
          </li>
          <li>
            <Link href={"#footer"}>Find Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
