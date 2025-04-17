import Image from "next/image";

interface HeroData {
  title: string;
  bgImageMobile: string;
  bgImageTablet: string;
  bgImageDesktop: string;
}

export default function PagesHero({
  title,
  bgImageMobile,
  bgImageTablet,
  bgImageDesktop,
}: HeroData) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-[3.75rem] sm:items-start sm:justify-start sm:py-[4.5rem] lg:px-16">
      <div className="absolute inset-0 z-30 bg-[#495567]/30 object-cover"></div>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageMobile}
          alt=""
          fill
          className="object-cover sm:hidden"
          priority
        />
        <Image
          src={bgImageTablet}
          alt=""
          fill
          className="hidden object-cover sm:block lg:hidden"
          priority
        />
        <Image
          src={bgImageDesktop}
          alt=""
          fill
          className="hidden object-cover lg:block"
          priority
        />
      </div>

      {/* Content */}
      <h1 className="relative z-50 text-center font-['Space_Mono'] text-[2.5rem] leading-10 font-bold tracking-[-0.11163rem] text-white sm:text-left sm:text-[3.5rem] sm:leading-14 sm:tracking-[-0.15625rem]">
        {title}
      </h1>

      {/* Pattern */}
      <Image
        src="/assets/patterns/white-circles.svg"
        alt="bg pattern"
        width={234}
        height={63}
        className="absolute -right-8 z-50 hidden sm:block"
      />
    </section>
  );
}
