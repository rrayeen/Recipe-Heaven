"use client";
import { TbLogout2 } from "react-icons/tb";
import { singOutAction } from "../_lib/action";
import toast from "react-hot-toast";
export default function LogoutButton() {
  return (
    <span
      className=" flex gap-2 items-center cursor-pointer  bg-red-700 text-white rounded-2xl py-1 px-2  font-bold"
      onClick={() => {toast.promise(singOutAction(), {
        loading: 'Loading',
        success: 'Logged out successfully',
        error: "Error occurred during logout.",
      })}}
    >
      <span className="py-1">

      <TbLogout2 />
      </span>
      <span className="hidden sm:block">
      Logout
      </span>
    </span>
  );
}
