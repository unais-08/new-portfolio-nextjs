"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  // Number of items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }

      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust current index when itemsToShow changes
  useEffect(() => {
    if (currentIndex > projects.length - itemsToShow) {
      setCurrentIndex(Math.max(0, projects.length - itemsToShow));
    }
  }, [itemsToShow, projects.length, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < projects.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to beginning
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to end
      setCurrentIndex(Math.max(0, projects.length - itemsToShow));
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Carousel Navigation Controls */}
      <div className="absolute top-1/2 -left-4 md:-left-6 z-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white dark:bg-secondary-800 shadow-md text-secondary-700 dark:text-secondary-300 focus:outline-none"
          aria-label="Previous project"
        >
          <FiChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 md:-right-6 z-10 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white dark:bg-secondary-800 shadow-md text-secondary-700 dark:text-secondary-300 focus:outline-none"
          aria-label="Next project"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Container */}
      <div ref={carouselRef} className="overflow-hidden">
        <motion.div
          className="flex"
          initial={false}
          animate={{
            x: -currentIndex * (carouselWidth / itemsToShow),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full px-2 flex-shrink-0"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({
          length: Math.ceil(projects.length - itemsToShow + 1),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full focus:outline-none ${
              currentIndex === index
                ? "bg-primary-600 dark:bg-primary-400"
                : "bg-secondary-300 dark:bg-secondary-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
