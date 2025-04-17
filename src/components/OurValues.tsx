import Image from "next/image";

const values = [
  {
    title: "Our tech",
    description:
      "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    image: "/assets/images/our-tech.jpg",
    number: 1,
  },
  {
    title: "Our integrity",
    description:
      "Our integrity is at the heart of everything we do. We believe in doing what's right, even when no one is looking.",
    image: "/assets/images/our-integrity.jpg",
    number: 2,
  },
  {
    title: "Our community",
    description:
      "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    image: "/assets/images/our-community.jpg",
    number: 3,
  },
];

export default function OurValues() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-16 px-6 py-[7.5rem] lg:px-16">
      <h1 className="font-['Space_Mono'] text-[2rem] leading-8 font-bold tracking-[-0.08931rem] text-[#495567] sm:text-[3rem] sm:leading-12 sm:tracking-[-0.13394rem]">
        Our Values
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-16 sm:justify-between lg:flex-row lg:items-start lg:gap-x-8">
        {values.map((value) => (
          <div
            className="flex flex-col items-center justify-center gap-y-16"
            key={value.number}
          >
            <div className="relative">
              <Image
                src={value.image}
                alt={value.title}
                width={240}
                height={240}
                className="rounded-full"
              />
              <span className="absolute right-0 -bottom-8 left-0 mx-auto flex size-24 items-center justify-center rounded-full bg-[#FCB72B] font-['Space_Mono'] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
                0{value.number}
              </span>
            </div>
            <div className="flex w-[19.4375rem] flex-col items-center justify-center gap-y-6.5 text-center sm:w-[28.5625rem] lg:w-[21.875rem]">
              <h2 className="font-['Space_Mono'] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
                {value.title}
              </h2>
              <p className="font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-[-0.01563rem] text-[#939CAA]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
