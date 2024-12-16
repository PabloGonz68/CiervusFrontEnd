import { Carousel as MaterialCarousel } from "@material-tailwind/react";

const MyCarousel = () => {
  return (
    <MaterialCarousel className="h-full border-2 border-secondary">
      <img
        src="public/foto1_carrousel.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://via.placeholder.com/1914x835"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://via.placeholder.com/1914x835"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </MaterialCarousel>
  );
};

export default MyCarousel;
