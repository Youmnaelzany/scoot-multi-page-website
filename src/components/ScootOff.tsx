import Image from "next/image";
import Link from "next/link";

export default function ScootOff() {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-y-10 overflow-hidden bg-[#495567] px-6 py-[5.5rem] sm:py-[3.88rem] lg:flex-row lg:items-center lg:justify-between lg:px-16"
      id="scoot-off"
    >
      <h2 className="w-80 text-center font-['Space_Mono'] text-[2rem] leading-8 font-bold tracking-[-0.08931rem] text-white sm:w-[28rem] sm:text-[3rem] sm:leading-12 sm:tracking-[-0.13394rem] lg:text-left">
        Sign up and Scoot off today
      </h2>
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <Image
            src="/assets/icons/app-store.svg"
            alt="app store"
            width={159}
            height={56}
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/icons/google-play.svg"
            alt="google play"
            width={182}
            height={48}
          />
        </Link>
      </div>
      <Image
        src="/assets/patterns/semi-circles.svg"
        alt="pattern"
        width={1158}
        height={158}
        className="absolute -right-44 bottom-0 mx-auto max-w-[150rem]"
      />
    </section>
  );
}
