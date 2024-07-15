import React, { FC } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

interface paginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  recipesLength: number;
}

export const Pagination: FC<paginationProps> = ({
  page,
  setPage,
  recipesLength,
}) => {
  return (
    <div className=" flex items-center gap-10 p-12 text-primary text-3xl  justify-center w-full">
      <div>
        {page !== 0 && (
          <FaArrowCircleLeft
            onClick={() => setPage((page) => page - 1)}
            className="hover:text-secondary  cursor-pointer"
          ></FaArrowCircleLeft>
        )}
      </div>
      <span className="font-bold text-secondary">{page + 1}</span>
      <div>
        {page < Math.floor(recipesLength / 10) && (
          <FaArrowCircleRight
            onClick={() => setPage((page) => page + 1)}
            className=" hover:text-secondary cursor-pointer"
          ></FaArrowCircleRight>
        )}
      </div>
    </div>
  );
};
