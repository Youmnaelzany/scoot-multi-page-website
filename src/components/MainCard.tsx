import Image from "next/image";

import { Button } from "./ui/button";

interface MainCardProps {
  title: string;
  description: string;
  image: string;
  specificClass?: "flex-row-reverse" | "flex-row";
  arrowImage?: "left-downward-arrow" | "right-arrow";
}

export default function MainCard({
  title,
  description,
  image,
  specificClass = "flex-row",
  arrowImage = "right-arrow",
}: MainCardProps) {
  const isReversed = specificClass === "flex-row-reverse";
  const circlePosition = isReversed ? "pr-16" : "pl-16";
  const arrowImagePath =
    arrowImage === "left-downward-arrow"
      ? "/assets/patterns/left-downward-arrow.svg"
      : "/assets/patterns/right-arrow.svg";

  return (
    <section
      className={`flex flex-col items-center justify-center gap-y-14 px-6 pt-[7.5rem] lg:px-16 lg:${specificClass} overflow-hidden lg:justify-between`}
    >
      {/* Image & Pattern */}
      <div className="relative flex">
        <Image
          src={image}
          alt={title}
          width={350}
          height={350}
          className="rounded-full sm:h-[450px] sm:w-[450px]"
        />
        <Image
          src="/assets/patterns/circle.svg"
          alt={title}
          width={600}
          height={600}
          className={`absolute hidden max-h-[500px] max-w-[500px] sm:flex ${isReversed ? "sm:-right-137 lg:-right-129" : "sm:-left-137 lg:-left-129"} sm:flex ${circlePosition}`}
        />
        <Image
          src={arrowImagePath}
          alt={title}
          width={350}
          height={115}
          className={`absolute bottom-17 ${isReversed ? "-right-6 sm:-right-39 lg:-right-16" : "-left-6 sm:-left-39 lg:-left-16"} -translate-y-1/2 ${isReversed ? "scale-x-[-1]" : ""}`}
        />
      </div>
      {/* Text */}
      <div className="flex w-[19.4375rem] flex-col items-center justify-center gap-y-8 text-center sm:w-[35.8125rem] lg:w-[27.8125rem] lg:items-start lg:justify-between lg:text-left">
        <h2 className="font-['Space_Mono'] text-[2rem] leading-8 font-bold tracking-[-0.08931rem] text-[#495567] sm:text-[3rem] sm:leading-12 sm:tracking-[-0.13394rem]">
          {title}
        </h2>
        <p className="font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-[-0.01563rem] text-[#939CAA]">
          {description}
        </p>
        <Button variant={"navbarButton"} className="hidden sm:flex" size={"lg"}>
          Learn More
        </Button>
      </div>
    </section>
  );
}
