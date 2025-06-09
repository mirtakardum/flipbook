'use client';

import React, { useState, useRef } from "react";
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
    const [isCentered, setIsCentered] = useState(true);
    const [pageClass, setPageClass] = useState("pr-100");
    const bookRef = useRef();

    const handleFlip = (e) => {
    const currentPage = e.data;
    const totalPages = bookRef.current.pageFlip().getPageCount();

    if (currentPage === 0) {
      setIsCentered(true);
      setPageClass("pr-100");
    } else if (currentPage === totalPages - 1) {
      setIsCentered(true);
      setPageClass("pl-100");
    } else {
      setIsCentered(false);
      setPageClass("");
    }
    };
    return(
    <>
    <div className={`flex items-center ${
        isCentered ? "justify-center pt-20" : "justify-center pt-20"
      } h-screen bg-transparent transition-all duration-500 overflow-hidden ${pageClass}`}>
        <div className="w-[90vw] h-[90vh] max-w-[800px] max-h-[1000px]">
      <HTMLFlipBook
        width={500}
        height={500}
        showCover={true}
        drawShadow={false}
        size="stretch"
        onFlip={handleFlip}
        ref={bookRef}
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