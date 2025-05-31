import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

function ProjectCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(carouselRef.current, {
      type: "carousel",
      startAt: 0,
      perView: 3, // Default number of slides per view
      autoplay: 3000,
      hoverpause: true,
      breakpoints: {
        1024: {
          perView: 2, // Medium screens
        },
        640: {
          perView: 1, // Small screens
        },
      },
    });

    glide.mount();

    return () => glide.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="glide" ref={carouselRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img
              src="https://i.imgur.com/7bP1tFX.png"
              alt="Slide 1"
              className="w-full h-auto object-cover"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://i.imgur.com/8djHPn3.png"
              alt="Slide 2"
              className="w-full h-auto object-cover"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://i.imgur.com/plZG0cD.png"
              alt="Slide 3"
              className="w-full h-auto object-cover"
            />
          </li>
        </ul>
      </div>
      {/* Navigation Controls */}
      <div data-glide-el="controls" className="flex justify-center mt-4">
        <button
          data-glide-dir="<"
          className="mx-2 px-4 py-2 bg-gray-300 rounded"
        >
          Prev
        </button>
        <button
          data-glide-dir=">"
          className="mx-2 px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
