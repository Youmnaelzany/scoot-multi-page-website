import Image from "next/image";

export default function LocationMap() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-[4.5rem] sm:px-16 sm:pt-[7.5rem]">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/world-map-mobile.png"
          alt="World Map"
          width={375}
          height={281}
          className="object-cover sm:hidden"
        />
        <Image
          src="/assets/images/world-map-db.png"
          alt="World Map"
          width={689}
          height={337}
          className="hidden object-cover sm:block lg:hidden"
        />
        <Image
          src="/assets/images/world-map-db.png"
          alt="World Map"
          width={1110}
          height={543}
          className="hidden object-cover lg:block"
        />
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:hidden">
        {/* New York */}
        <h2 className="flex h-[4.5rem] w-[19.4375rem] items-center justify-center bg-[#FFF4DF] font-[Space_Mono] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
          New York
        </h2>
        {/* London */}
        <h2 className="flex h-[4.5rem] w-[19.4375rem] items-center justify-center bg-[#FFF4DF] font-[Space_Mono] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
          London
        </h2>
        {/* Jakarta */}
        <h2 className="flex h-[4.5rem] w-[19.4375rem] items-center justify-center bg-[#FFF4DF] font-[Space_Mono] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
          Jakarta
        </h2>
        {/* Yokohama */}
        <h2 className="flex h-[4.5rem] w-[19.4375rem] items-center justify-center bg-[#FFF4DF] font-[Space_Mono] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567]">
          Yokohama
        </h2>
      </div>
    </section>
  );
}
