"use server";
import { signIn,signOut } from "../_lib/auth";
export async function singInAction() {
  await signIn("google");
}
export async function singOutAction() {
  await signOut();  
}
