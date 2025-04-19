import Faqs from "@/components/Faqs";
import MainCard from "@/components/MainCard";
import OurValues from "@/components/OurValues";
import PagesHero from "@/components/PagesHero";

export default function About() {
  return (
    <main className="">
      <PagesHero
        title="About"
        bgImageMobile="/assets/images/about-hero-mobile.jpg"
        bgImageTablet="/assets/images/about-hero-tablet.jpg"
        bgImageDesktop="/assets/images/about-hero-desktop.jpg"
      />
      <MainCard
        title="Mobility for the digital era"
        description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        image="/assets/images/digital-era.jpg"
        specificClass="flex-row-reverse"
        href="#"
        buttonText="Learn More"
      />
      <MainCard
        title="Better urban living"
        description="We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        image="/assets/images/better-living.jpg"
        specificClass="flex-row"
        href="#"
        buttonText="Learn More"
      />
      <OurValues title="Our values" />
      <Faqs />
    </main>
  );
}
