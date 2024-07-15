"use server";
import { signIn } from "../_lib/auth";
export async function singInAction() {
  await signIn("google");
}
