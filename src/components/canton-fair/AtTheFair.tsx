"use client";

import basePath from "@/lib/basePath";
import TimelineSection from "./TimelineSection";
import { WebsiteCardComponent, CardGrid } from "./ToolkitCards";

/* ─── Sourcing tips data ─── */

const hallTips = [
  {
    title: "Start with booths you don't care about",
    desc: "Warm up on booths outside your product category first. Learn the rhythm of asking questions, comparing products, and reading supplier behaviour before you approach your real targets.",
  },
  {
    title: "Photograph products next to the booth sign",
    desc: "When you review 200 photos in your hotel room later, you will not remember which product came from which booth. Always include the booth name plate in the photo.",
  },
  {
    title: "Don't hand out your business card",
    desc: "If you give your card to every booth, you will receive hundreds of emails and WeChat messages for months. Photograph their card instead — follow up only with the suppliers you actually want.",
  },
  {
    title: "The fair is for discovery, not ordering",
    desc: "Do not place orders at booths. Collect information, compare suppliers, and negotiate after the fair when you have verified who you are dealing with. Rushing into orders at the booth often leads to problems.",
  },
  {
    title: "Cap yourself at 4–5 focused hours per day",
    desc: "You will walk 20,000+ steps across halls the size of airports. Beyond 5 hours, exhaustion leads to bad decisions. Better to visit fewer booths with clear thinking than to power through and miss details.",
  },
  {
    title: "Ask for samples on the last day of each phase",
    desc: "Many exhibitors prefer not to ship display samples home. On the last day, ask if you can take samples with you — they are often free or heavily discounted.",
  },
];

const factoryRedFlags = [
  {
    question: "\"Are you the factory or a trading company?\"",
    what: "Direct question — watch their reaction. Hesitation is a signal.",
  },
  {
    question: "\"Can I visit your factory this week?\"",
    what: "If they say \"it's not convenient\" or \"too far\" — that is a major red flag. Real factories want you to visit.",
  },
  {
    question: "\"What is your production capacity per month?\"",
    what: "Real factories give specific numbers. Trading companies give vague ranges.",
  },
  {
    question: "\"How broad is your product range?\"",
    what: "iPhone cases AND USB power banks AND selfie sticks = almost certainly a middleman, not a manufacturer.",
  },
  {
    question: "\"Can I see your business license?\"",
    what: "Check the scope section. Look for \"manufacturing\" vs \"international trade\". This one word tells you the truth.",
  },
];

const boothQuestions = [
  "What is your FOB price for [your target quantity]?",
  "What is your MOQ? Do you accept test orders?",
  "What is your lead time from order to shipment?",
  "What certifications do you hold? (CE, FCC, FDA, etc.)",
  "Can I visit your factory during the gap days?",
];

const safetyTips = [
  {
    title: "Exchange money at bank ATMs only",
    desc: "Money exchange booths at train stations have been known to give counterfeit bills. Use official bank ATMs or exchange money before arriving in China.",
  },
  {
    title: "Use official taxis or DiDi",
    desc: "Private drivers at airports charge inflated prices. Some taxi drivers start meters at double rates. Use DiDi (China's Uber) or official taxi queues. Have your destination written in Chinese.",
  },
  {
    title: "Turn VPN off for mobile payments",
    desc: "WeChat Pay and Alipay can fail when your VPN is active. Turn it off before scanning QR codes or making payments.",
  },
  {
    title: "Keep your hotel card on you at all times",
    desc: "Ask your hotel concierge for a card with the hotel name and address in Chinese. This is how you get home in a taxi when Google Translate is not cooperating.",
  },
];

export default function AtTheFair() {
  return (
    <TimelineSection
      id="at-fair"
      badge="At the Fair"
      title="Make It Count"
      subtitle="Canton Fair is 1.1 million square meters — the size of 218 football fields. 48,000+ exhibitors. Three phases over three weeks. The sheer scale is overwhelming, even for experienced buyers. Here is how to navigate it with purpose."
      bg="bg-wf-bg-light"
    >
      <div className="space-y-16">
        {/* Navigate the venue */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            Navigate the venue
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            Download the floor plan before day 1. The venue has 4 exhibition areas — knowing which halls match your product category saves you hours of wandering.
          </p>
          <CardGrid count={2}>
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Venue Map & Buyer Guide",
                desc: "Floor plans, hall assignments, and buyer services. Plan your route the night before each day.",
                href: "https://www.cantonfair.org.cn/en-US/customPages/buyerGuide",
                domain: "cantonfair.org.cn",
                screenshot: "toolkit-cantonfair-map.jpg",
              }}
            />
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Exhibitor Search",
                desc: "Look up exhibitors by name, category, or booth number. Check your hit list against real-time booth locations.",
                href: "https://www.cantonfair.org.cn/en-US/",
                domain: "cantonfair.org.cn",
                screenshot: "toolkit-cantonfair-exhibitors.jpg",
              }}
            />
          </CardGrid>
        </div>

        {/* How to work the halls */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            How to work the halls
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            These are lessons from buyers who&apos;ve been. Not theory — experience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hallTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-xl border border-wf-border p-5"
              >
                <h4 className="font-semibold text-sm text-wf-text mb-2">
                  {tip.title}
                </h4>
                <p className="text-xs text-wf-text-muted leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory vs Trading Company — THE KEY SECTION */}
        <div className="bg-white rounded-2xl border-2 border-wf-red/20 p-6 md:p-8">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-wf-red/10 text-wf-red flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-wf-text">
                Spotting real factories vs trading companies
              </h3>
              <p className="text-sm text-wf-text-secondary mt-1">
                This is the number one thing first-timers learn the hard way. Most booths are run by trading companies or export agents, not actual manufacturers. They rent a booth, show products from multiple small workshops, and present themselves as the factory. Here are 5 questions that reveal the truth.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {factoryRedFlags.map((flag, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-full bg-wf-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm text-wf-text">
                    {flag.question}
                  </p>
                  <p className="text-xs text-wf-text-muted mt-0.5">
                    {flag.what}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to ask at every booth */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            What to ask at every booth
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            When a supplier quotes you a price, make sure it&apos;s FOB (Free On Board) — that means the price includes shipping the goods to the port. EXW (Ex Works) means you pick up at the factory door, and the cost of getting it to the port is on you. First-timers who don&apos;t ask this question get hit with unexpected shipping costs that wipe out their margin.
          </p>
          <div className="bg-white rounded-xl border border-wf-border p-6">
            <ol className="space-y-3">
              {boothQuestions.map((q, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  <span className="w-6 h-6 rounded-full bg-wf-bg-light text-wf-text-muted text-xs font-semibold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-wf-text">{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Gap days = factory visits */}
        <div className="bg-white rounded-xl border border-wf-border p-6 md:p-8">
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Gap days are your golden opportunity
          </h3>
          <p className="text-sm text-wf-text-secondary leading-relaxed mb-4">
            Between each phase there are 3-day gaps: <strong>April 20–22</strong> and <strong>April 28–30</strong>. Contact your top suppliers at the fair and ask to visit their factory during these days. Dongguan, Foshan, Shenzhen, and Zhongshan are all 1 to 3 hours away by car or high-speed train.
          </p>
          <p className="text-sm text-wf-text-secondary leading-relaxed">
            Seeing a factory in person tells you more about quality, capacity, and reliability than any booth conversation ever could. If a supplier refuses or keeps making excuses about why you can&apos;t visit — that tells you everything.
          </p>
        </div>

        {/* WorldFirst Booth */}
        <div className="bg-wf-purple-glow rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Come say hi
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Find the <span className="text-wf-red">WorldFirst</span> Booth
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Come talk to us face-to-face about your supplier payment needs.
                Our team can walk you through same-day CNY payments, supplier
                verification, and how to protect your money when working with
                new factories.
              </p>
              <div className="space-y-2 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                  </svg>
                  <span>Location: <span className="text-white font-medium">Coming soon</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Available <span className="text-white font-medium">all 3 phases</span></span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <img
                src={`${basePath}/images/wf-booth-canton.jpg`}
                alt="WorldFirst team at their Canton Fair booth"
                className="w-full h-full object-cover min-h-[280px] md:min-h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stay safe */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            Watch out for
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            China is generally safe, but trade fairs attract opportunists. A few things to know.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {safetyTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-xl border border-wf-border p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-wf-text mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-wf-text-muted leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TimelineSection>
  );
}
