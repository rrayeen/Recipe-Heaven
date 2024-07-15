import image from "@/app/img/p2.jpg";
import Image from "next/image";
import { auth } from "../_lib/auth";
import { SignInButton } from "./SignInButton";

export default async function FeedBackForm() {
  const sesson = await auth();

  return (
    <div className="p-8 flex items-center justify-center flex-col">
      <p className=" tracking-widest font-bold text-fourth">Post feedback ❤</p>

      {sesson ? (
        <form
          action={""}
          className="mt-4 bg-third rounded grid grid-cols-2  h-96 w-2/3 shadow-lg p-4"
        >
          <div className="flex flex-col h-full">
            <label htmlFor="feed" className="flex items-center gap-4 mx-4">
              <div className="h-14 w-14 relative">
                <Image
                  src={sesson.user?.image || ""}
                  alt="image"
                  fill
                  className="object-cover rounded-full"
                ></Image>
              </div>
              What did you like about us {sesson.user?.name} :
            </label>
            <textarea
              name="feed"
              id="feed"
              className="p-4 border rounded resize-none m-4 h-full shadow-sm "
              placeholder="Give us feedback..."
            ></textarea>
          </div>
          <div className=" rounded-lg relative  ">
            <Image
              src={image}
              alt="image"
              fill
              className="object-cover rounded-xl"
            ></Image>
          </div>
        </form>
      ) : (
        <div className="mt-12">
          <SignInButton></SignInButton>
        </div>
      )}
    </div>
  );
}
