"use client";

export default function PostButton({submit}: {submit:any}) {
  return (
    <button
      className="cursor-pointer bg-primary w-fit py-1 px-3 rounded-2xl text-white font-bold"
      onClick={(e) => {
        e.preventDefault()
        submit()
      }}
    >
      Post
    </button>
  );
}
