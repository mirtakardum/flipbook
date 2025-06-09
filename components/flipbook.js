'use client';

import React from "react";
import HTMLFlipBook from "react-pageflip";

const images = [
  "/images/TNUL_1.jpg",
  "/images/TNUL_2.jpg",
  "/images/TNUL_3.jpg",
  "/images/TNUL_4.jpg",
  "/images/TNUL_5.jpg",
  "/images/TNUL_6.jpg",
  "/images/TNUL_7.jpg",
  "/images/TNUL_8.jpg",
];

function Flipbook(){
    return(
    <>
    <div className="flex justify-center items-center h-screen bg-transparent overflow-hidden">
        <div className="w-[90vw] h-[90vh] mt-50  max-w-[800px] max-h-[1000px]">
      <HTMLFlipBook
        width={500}
        height={500}
        showCover={true}
        drawShadow={false}
        size="stretch"
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full bg-transparent shadow-none">
            <img
              src={src}
              alt={`Page ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
    </div>
    </>
    )
}

export default Flipbook;