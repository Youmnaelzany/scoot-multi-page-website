import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export default function HomeHero() {
  return (
    <section className="relative z-50 flex flex-col items-center justify-center gap-6 overflow-hidden px-6 pt-[7.19rem] pb-[11.19rem] text-center sm:items-start sm:justify-start sm:pt-[8.56rem] sm:pb-[8.56rem] lg:items-start lg:justify-between lg:pt-[9.56rem] lg:pb-[9.56rem] lg:pl-40 lg:text-left">
      <div className="absolute inset-0 z-30 bg-[#495567]/30 object-cover"></div>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home-hero-mobile.jpg"
          alt="hero image"
          fill
          className="object-cover sm:hidden"
          priority
        />
        <Image
          src="/assets/images/home-hero-tablet.jpg"
          alt="hero image"
          fill
          className="hidden object-cover sm:block lg:hidden"
          priority
        />
        <Image
          src="/assets/images/home-hero-desktop.jpg"
          alt="hero image"
          fill
          className="hidden object-cover lg:block"
          priority
        />
      </div>
      {/* Pattern */}
      <Image
        src="/assets/patterns/white-circles.svg"
        alt="bg pattern"
        width={234}
        height={63}
        className="absolute -right-8 bottom-8 z-50 hidden sm:block lg:bottom-42"
      />
      {/* Right Arrow */}
      <Image
        src="/assets/patterns/right-arrow.svg"
        alt="bg pattern"
        width={234}
        height={63}
        className="absolute bottom-8 -left-36 z-50 sm:-left-48 sm:w-[500px] lg:right-56 lg:bottom-43 lg:left-auto lg:w-[350px]"
      />
      {/* Line */}
      <Image
        src="/assets/patterns/line.svg"
        alt="bg pattern"
        width={234}
        height={63}
        className="absolute bottom-67 -left-6 z-50 hidden lg:block"
      />

      {/* Content */}
      <div className="z-50 flex w-[19.4375rem] flex-col items-center justify-center gap-6 text-center sm:mx-auto sm:w-[35.8125rem] sm:items-center sm:justify-center lg:mx-0 lg:w-[31.25rem] lg:items-start lg:justify-start lg:text-left">
        <h1 className="w-[19.4375rem] text-center font-['Space_Mono'] text-[2.5rem] leading-10 font-bold tracking-[-0.11163rem] text-white sm:w-[35.8125rem] sm:text-center sm:text-[3.5rem] sm:leading-14 sm:tracking-[-0.15625rem] lg:w-[31.25rem] lg:text-left">
          Scooter sharing made simple
        </h1>
        <p className="w-[19.4375rem] font-[`Lexend_Deca`] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#E5ECF4] sm:w-[35.8125rem] sm:text-center lg:w-[25.3125rem] lg:self-end lg:text-left">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you&apos;re away!
        </p>
        <div className="sm:flex sm:justify-center lg:ml-23 lg:w-[25.3125rem] lg:justify-start">
          <Button variant={"navbarButton"} className="" size={"lg"}>
            <Link href="#scoot-off">Get Scootin</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
