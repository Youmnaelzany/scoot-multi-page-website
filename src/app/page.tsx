import AppsBenefits from "@/components/AppsBenefits";
import HomeHero from "@/components/HomeHero";
import MainCard from "@/components/MainCard";

export default function Home() {
  return (
    <main className="">
      {/* Hero */}
      <HomeHero />
      {/* Apps Benefits */}
      <AppsBenefits />
      {/* Main Cards */}
      <MainCard
        title="Easy to use riding telemetry"
        description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        image="/assets/images/telemetry.jpg"
        specificClass="flex-row-reverse"
        href="/about"
        buttonText="Learn More"
      />
      <MainCard
        title="Coming to a city near you"
        description="Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        image="/assets/images/near-you.jpg"
        specificClass="flex-row"
        href="/locations"
        buttonText="Learn More"
      />
      <div className="pb-[7.5rem]">
        <MainCard
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          image="/assets/images/payments.jpg"
          specificClass="flex-row-reverse"
          href="/about"
          buttonText="Learn More"
        />
      </div>
    </main>
  );
}
