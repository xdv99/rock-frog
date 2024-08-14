"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function SectionButton({ tag }) {
  return (
    <>
      <button
        onClick={(e) => {
          document.getElementById(tag).scrollBy(-500, 0);
        }}
        className="p-3 bg-slate-800 bg-opacity-90 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={(e) => {
          document.getElementById(tag).scrollBy(500, 0);
        }}
        className="p-3 bg-slate-800 bg-opacity-90 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <IoIosArrowForward />
      </button>
    </>
  );
}
