import JobOpportunities from "@/components/JobOpportunities";
import MainCard from "@/components/MainCard";
import OurValues from "@/components/OurValues";
import PagesHero from "@/components/PagesHero";

export default function Careers() {
  return (
    <main className="">
      <PagesHero
        title="Careers"
        bgImageMobile="/assets/images/careers-locations-hero-mobile.jpg"
        bgImageTablet="/assets/images/careers-locations-hero-tablet.jpg"
        bgImageDesktop="/assets/images/careers-locations-hero-desktop.jpg"
      />
      <MainCard
        title="Care to join our mission?"
        description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        image="/assets/images/join-us.jpg"
        specificClass="flex-row-reverse"
        href="#"
        buttonText="Say Hello"
      />
      <OurValues title="Why join us?" />
      <JobOpportunities />
    </main>
  );
}
