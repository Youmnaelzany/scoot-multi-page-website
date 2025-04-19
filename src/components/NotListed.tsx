import { Button } from "./ui/button";

export default function NotListed() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-6 py-[4.5rem] sm:gap-10 sm:pb-[7.5rem] lg:flex-row lg:justify-between lg:px-16 lg:py-[7.5rem]">
      <div className="flex flex-col items-center justify-center gap-8 text-center sm:gap-10 lg:flex-row lg:justify-between lg:gap-[1.88rem] lg:text-left">
        <h2 className="w-[19.4375rem] font-['Space_Mono'] text-[2rem] leading-8 font-bold tracking-[-0.08931rem] text-[#495567] sm:w-[28.5625rem] sm:text-[3rem] sm:leading-12 sm:tracking-[-0.13394rem] lg:w-[21.9375rem]">
          Your City Not Listed?
        </h2>
        <p className="w-[19.4375rem] font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#939CAA] sm:w-[35.8125rem] lg:w-[27.8125rem]">
          If you&apos;d like to see Scoot in your hometown, be sure to let us
          know. We track requests and plan launches based on demand. Feel free
          to message us by clicking the link or messaging us on social.
        </p>
      </div>
      <Button variant={"navbarButton"} className="" size={"lg"}>
        Learn More
      </Button>
    </section>
  );
}
