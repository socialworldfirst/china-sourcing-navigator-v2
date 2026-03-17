"use client";

const tips = [
  {
    number: "01",
    title: "The fair is for discovery, not ordering",
    desc: "Do not place orders at the fair. Canton Fair is the best place to meet suppliers face to face, compare products, and collect information. After the fair, take time to verify each supplier, compare quotes, and negotiate terms by email or WeChat. Rushing into an order at the booth often leads to problems later.",
  },
  {
    number: "02",
    title: "Walk every aisle in your category halls",
    desc: "The biggest booths are not always the best suppliers. Many excellent factories have small booths because they spend their money on production, not marketing. Give yourself 15 to 20 minutes per hall. Walk every aisle, even the ones that look less interesting. Some of the best sourcing relationships start with an unexpected discovery.",
  },
  {
    number: "03",
    title: "Photograph their cards, do not hand out yours",
    desc: "If you hand out your business card to every booth, you will receive hundreds of emails and WeChat messages for months afterwards. Instead, take a photo of each supplier's business card with your phone. This lets you follow up only with the suppliers you are genuinely interested in, and keeps your inbox manageable.",
  },
  {
    number: "04",
    title: "Use the gap days for factory visits",
    desc: "Between each phase there are 3-day gaps (April 20 to 22 and April 28 to 30). Use these days to visit factories near Guangzhou. Dongguan, Foshan, Shenzhen, and Zhongshan are all 1 to 3 hours away by car or train. Seeing a factory in person tells you far more about quality and capacity than any booth conversation.",
  },
  {
    number: "05",
    title: "Follow up within 48 hours",
    desc: "Suppliers meet thousands of buyers during the fair. If you wait a week to follow up, they may not remember your conversation. Send a follow-up email or WeChat message within 48 hours. Confirm the products you discussed, the pricing, the MOQ, and any samples you requested. Attach a photo of their business card so they can identify you quickly.",
  },
  {
    number: "06",
    title: "Bring your product specifications on a USB drive",
    desc: "If you already know what you want to source, prepare a USB drive with your product specifications. Include technical drawings, target pricing, required certifications, and packaging requirements. Prepare these in both Chinese and English if possible. Suppliers take you more seriously when you arrive with clear specs, and it reduces revision rounds later.",
  },
];

export default function ProTips() {
  return (
    <section id="tips" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            Pro <span className="accent-word">Tips</span>
          </h2>
          <p className="text-wf-text-secondary text-sm max-w-lg mx-auto">
            Lessons from buyers who have been. Skip the learning curve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="bg-wf-bg-light rounded-xl border border-wf-border p-6 hover:border-wf-red/20 transition-colors"
            >
              <span className="text-3xl font-bold text-wf-red/15 block mb-2">
                {tip.number}
              </span>
              <h3 className="font-semibold text-sm text-wf-text mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-wf-text-muted leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
