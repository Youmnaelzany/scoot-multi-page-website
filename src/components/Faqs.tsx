import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 pb-[7.5rem] text-center lg:px-16 lg:pb-40">
      <h2 className="font-['Space_Mono'] text-[2rem] leading-8 font-bold tracking-[-0.08931rem] text-[#495567] sm:text-[3rem] sm:leading-12 sm:tracking-[-0.13394rem]">
        FAQs
      </h2>
      {/*  How it works */}
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h3 className="w-[21.875rem] font-['Space_Mono'] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567] sm:text-[2.5rem] sm:leading-12 sm:tracking-[-0.11163rem]">
          How it works
        </h3>
        <div className="space-y-4">
          {/* How do I download the app? */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                How do I download the app?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/*   Can I find a nearby Scoots?  */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                Can I find a nearby Scoots?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                Definitely! Simply open up the app and allow us to find your
                location while using it. We&apos;ll show you all of the closest
                Scoots and some extra useful information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/*   Do I need a license to ride? */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                Do I need a license to ride?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                Yup! We provide information inside the app regarding local laws
                and the license you need to be able to ride our Scoots.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/*  Safe driving */}
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h3 className="w-[21.875rem] font-['Space_Mono'] text-2xl leading-7 font-bold tracking-[-0.06694rem] text-[#495567] sm:text-[2.5rem] sm:leading-12 sm:tracking-[-0.11163rem]">
          Safe driving
        </h3>
        <div className="space-y-4">
          {/* Should I wear a helmet? */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                Should I wear a helmet?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/*   How about the rules & regulations?  */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                How about the rules & regulations?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                Now is not the time to be a rule breaker. Be sure you&apos;re
                complying with all local laws and regulations. Also, just be a
                good human being. Be sure not to park your Scoot where it can
                block access to buildings or get in people&apos;s way.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/*   What if I damage my Scoot? */}
          <Accordion
            type="single"
            collapsible
            className="w-[19.4375rem] bg-[#F2F5F9] p-8 sm:w-[43.0625rem] lg:w-[45.625rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-['Space_Mono'] text-lg leading-6 font-bold tracking-[-0.05025rem] text-[#495567] sm:text-2xl sm:leading-7 sm:tracking-[-0.06694rem]">
                What if I damage my Scoot?
              </AccordionTrigger>
              <AccordionContent className="w-[15.6875rem] text-left font-['Lexend_Deca'] text-[0.9375rem] leading-[1.5625rem] font-normal text-[#495567] sm:w-[38.5625rem] lg:w-[40.625rem]">
                Be sure to read our terms and conditions carefully. Not the most
                fun job we know but we make it as clear as possible.
                There&apos;s an option to add insurance for each trip, or you
                can sign up for annual insurance if you&apos;re a regular
                Scooter.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
