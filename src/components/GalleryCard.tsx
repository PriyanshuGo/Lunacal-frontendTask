import { Card, CardHeader, CardContent } from "@/components/ui/card";
import info from "@/assets/info.svg";
import blocks from "@/assets/blocks.svg";
import { Plus } from 'lucide-react';

import leftArrow from "@/assets/left.svg"; // replace with actual arrow icons
import rightArrow from "@/assets/right.svg";
import Image1 from "@/assets/gallery1.jpg";
import { useState } from "react";

const GalleryCard = () => {
  const [images, setImages] = useState([Image1, Image1, Image1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  // 📸 Handle image upload from device
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Convert all selected files to temporary preview URLs
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

    // Add them to existing images
    setImages((prev) => [...prev, ...newImages]);

    // Reset input value so you can select the same file again later
    e.target.value = "";
    setCurrentIndex((prev) => prev + 1);
  };

  // ◀️ Previous button handler
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // ▶️ Next button handler
  const handleNext = () => {
    if (currentIndex + imagesPerPage < images.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Show only the visible portion
  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);
  return (
    <div className="flex h-full">
      <Card className="!m-0 !p-0 flex w-full h-full rounded-2xl border-none shadow-[6px_6px_15px_rgba(0,0,0,0.9)] overflow-hidden bg-[#363C43]">
        {/* Left Icons Sidebar */}
        <div className="flex flex-col justify-between items-center py-4 sm:py-6 px-1 sm:px-2 w-10 sm:w-14 min-w-0">
          {/* Top Info icon */}
          <div className="relative group">
            <img
              src={info}
              alt="Info icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          {/* Center Blocks icon */}
          <div className="relative group self-center mt-auto mb-auto">
            <img
              src={blocks}
              alt="Blocks icon"
              className="w-5 h-5 sm:w-6 sm:h-8 md:w-8 md:h-10 opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>


        <div className="flex-1 flex flex-col my-0 min-w-0">
          {/* Main Content */}
          <CardHeader className="px-0 pr-10 py-3 flex-row justify-between items-center font-poppins text-[#FFFFFF]">
            <div>
              <h2 className="bg-[#171717]  font-medium text-sm sm:text-base  md:py-3 md:px-8 md:text-[20px] px-4 py-2 rounded-2xl shadow-inner">
                Gallery
              </h2>
            </div>
            <div className="flex gap-3 items-center lg:space-x-4 mx-1">
              {/* ADD IMAGE button */}
              <div>
                <label
                  htmlFor="file-upload"
                  className="flex  font-bold gap-2 bg-[#28292F] text-[10px] py-1 px-3 lg:text-[12px] lg:px-6 lg:py-3 rounded-full text-white hover:bg-[#2F3033] transitionshadow-[6px_10px_4px_rgba(40,40,40,1),_-3px_-3px_8px_rgba(255,255,255,-0.1),inset_0px_3px_6px_rgba(255,255,255,0.20)]"
                >
                  <Plus className="h-4 w-4" />
                  ADD IMAGE
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAddImage}
                  className="hidden"
                />
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full flex items-center justify-center 
      shadow-[4px_4px_15px_rgba(0,0,0,0.8),_-3px_-3px_8px_rgba(255,255,255,-0.1),0px_0px_10px_rgba(255,255,255,0.30)]  
      hover:shadow-[5px_5px_15px_rgba(0,0,0,0.9)] transition"
                >
                  <img src={leftArrow} alt="left" className="w-3 h-3" />
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex + imagesPerPage >= images.length}
                  className="w-10 h-10 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full flex items-center justify-center 
      shadow-[4px_4px_15px_rgba(0,0,0,0.8),0px_0px_10px_rgba(255,255,255,0.30)]  
      hover:shadow-[5px_5px_15px_rgba(0,0,0,0.9)] transition"
                >
                  <img src={rightArrow} alt="right" className="w-3 h-3" />
                </button>
              </div>
            </div>

          </CardHeader>

          <CardContent className=" px-0 pr-10 pt-4 flex gap-4 pb-2 overflow-x-hidden custom-scroll">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] h-[140px] rounded-xl overflow-hidden bg-[#2F3033] flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full max-w-full h-full object-cover"
                />
              </div>
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default GalleryCard;
