import { Button } from "@/components/ui/button";

const jobOpportunities = [
  {
    title: "General Manager",
    country: "Jakarta, Indonesia",
  },
  {
    title: "UI/UX Designer",
    country: "Yokohama, Japan",
  },
  {
    title: "Blog Content Copywriter",
    country: "New York, United States",
  },
  {
    title: "Graphic Designer",
    country: "New York, United States",
  },
  {
    title: "Fleet Supervisor",
    country: "Jakarta, Indonesia",
  },
  {
    title: "UX Analyst",
    country: "London, United Kingdom",
  },
];

export default function JobOpportunities() {
  return (
    <section className="flex flex-col gap-4 px-6 pb-[7.5rem] lg:px-16">
      {jobOpportunities.map((job) => (
        <div
          key={job.title}
          className="flex flex-col items-center justify-center gap-4 bg-[#F2F5F9] px-8 py-8.5 sm:flex-row sm:justify-between sm:px-12 lg:pr-10 lg:pl-16"
        >
          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-left">
            <h2 className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567]">
              {job.title}
            </h2>
            <h3 className="font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567]">
              {job.country}
            </h3>
          </div>
          <Button variant="navbarButton" size="lg">
            Apply
          </Button>
        </div>
      ))}
    </section>
  );
}
