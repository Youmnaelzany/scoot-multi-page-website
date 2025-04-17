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
      <OurValues />
    </main>
  );
}
