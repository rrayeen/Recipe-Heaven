export default async function Footer() {
  return (
    <footer id="footer" className="bg-third ">
      <div className="flex items-center justify-around p-8">
        <div>
          <p className=" text-center font-bold tracking-wider">Contact us</p>
          <p className="">
            <span className="font-semibold">E-mail : </span>
            RecipeHeaven@Food.cc
          </p>
          <p className="">
            <span className="font-semibold">Phone-Number : </span>
            (555) 987-6543
          </p>
        </div>
        <div>
          <p className=" text-center font-bold tracking-wider">Find us</p>
          <p className="">
            <span className="font-semibold">Adress : </span>
            1234 Elm Street Faketown, FA 56789 USA
          </p>
        </div>
      </div>
      <div className="text-center p-6 font-semibold tracking-wider border-t border-black">
        © 2028 Recipe Heaven All rights reserved.
      </div>
    </footer>
  );
}
