import LocationMap from "@/components/LocationMap";
import NotListed from "@/components/NotListed";
import PagesHero from "@/components/PagesHero";

export default function Locations() {
  return (
    <main className="">
      <PagesHero
        title="Locations"
        bgImageMobile="/assets/images/careers-locations-hero-mobile.jpg"
        bgImageTablet="/assets/images/careers-locations-hero-tablet.jpg"
        bgImageDesktop="/assets/images/careers-locations-hero-desktop.jpg"
      />
      <LocationMap />
      <NotListed />
    </main>
  );
}
