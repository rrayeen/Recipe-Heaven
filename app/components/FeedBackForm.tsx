import { auth } from "../_lib/auth";
import { SignInButton } from "./SignInButton";
import Form from "./Form";

export default async function FeedBackForm() {
  const sesson = await auth();
  return (
    <div className="p-8 flex items-center justify-center flex-col">
      <p className=" tracking-widest font-bold text-fourth">Post feedback ❤</p>

      {sesson ? (
        <Form sesson={sesson}></Form>
      ) : (
        <div className="mt-12">
          <SignInButton></SignInButton>
        </div>
      )}
    </div>
  );
}
