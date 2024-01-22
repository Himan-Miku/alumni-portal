import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "shadcn/ui/carousel";
import Image from "next/image";

interface Prop {
  imgarr: string[];
}
const Slider = (prop: Prop) => {
  return (
    <>
      <Carousel className="w-full ">
        <CarouselContent>
          {prop.imgarr.map((elem, index) => (
            <CarouselItem key={index}>
              <img src={elem} alt="alumni images" className="w-full"></img>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Slider;
