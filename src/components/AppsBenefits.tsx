import Image from "next/image";

const benefits = [
  {
    title: "Locate with app",
    description:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
    image: "/assets/icons/locate.svg",
  },
  {
    title: "Pick your scooter",
    description:
      "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. ",
    image: "/assets/icons/ride.svg",
  },
  {
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkways and accessibility ramps. ",
    image: "/assets/icons/scooter.svg",
  },
];

export default function AppsBenefits() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 overflow-hidden px-6 pt-[7.5rem] sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
      <div className="absolute top-0 left-[19%] hidden h-[34.0625rem] w-[0.5rem] -translate-x-1/2 bg-[#E5ECF4] sm:block lg:hidden" />
      <div className="absolute top-[11rem] -left-16 hidden h-[0.5rem] w-[60.875rem] bg-[#E5ECF4] sm:hidden lg:block" />
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:justify-between sm:gap-20 lg:w-auto lg:flex-col lg:items-start lg:justify-start lg:gap-[1.88rem]"
        >
          <div className="relative">
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={56}
              height={56}
              className="sm:size-24"
            />
          </div>
          <div className="flex w-[19.4375rem] flex-col items-center justify-center gap-6 text-center sm:w-[24.875rem] sm:items-start sm:text-left lg:w-[21.875rem]">
            <h2 className="font-['Space_Mono'] text-xl leading-7 font-bold tracking-[-0.05581rem] text-[#495567]">
              {benefit.title}
            </h2>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-normal text-[#939CAA]">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
