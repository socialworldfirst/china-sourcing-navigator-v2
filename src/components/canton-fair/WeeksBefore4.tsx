"use client";

import TimelineSection from "./TimelineSection";
import {
  WebsiteCardComponent,
  AppCardComponent,
  GuidanceCardComponent,
  CardGrid,
} from "./ToolkitCards";

export default function WeeksBefore4() {
  return (
    <TimelineSection
      id="weeks-4"
      badge="2–4 Weeks Before"
      title="Get Set Up"
      subtitle="These are the things you cannot do once you land in China. VPNs, apps, and research — handle it now while you still have unrestricted internet."
      bg="bg-wf-bg-light"
    >
      <div className="space-y-12">
        {/* VPN */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Download a VPN
          </h3>
          <CardGrid count={1}>
            <GuidanceCardComponent
              card={{
                type: "guidance",
                title: "Set Up a VPN Before You Travel",
                desc: "Google, WhatsApp, Instagram, Facebook, and most Western services are blocked in China. Search 'best VPN for China' on Google and download one before you leave. Test it at home to make sure it works. You cannot easily download a VPN after you arrive. Important: turn your VPN OFF when making payments through WeChat or Alipay — it breaks the payment flow.",
              }}
            />
          </CardGrid>
        </div>

        {/* Essential Apps */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Download these apps
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            This is the part that catches almost every first-timer off guard. Most of the apps and services you rely on daily do not work in China. Set these up before you land — creating accounts is easier with unrestricted internet.
          </p>
          <CardGrid count={3}>
            <AppCardComponent
              card={{
                type: "app",
                title: "WeChat",
                desc: "China's super-app. Every supplier uses it for messaging. You will also use it for mobile payments, QR codes, and metro tickets. This is not optional.",
                screenshot: "toolkit-app-wechat.jpg",
                stores: "iOS & Android",
              }}
            />
            <AppCardComponent
              card={{
                type: "app",
                title: "Alipay",
                desc: "Mobile payments for restaurants, metro rides, shared bikes, and taxis. International visitors can now link a foreign credit card. Single transaction limit is about $700.",
                screenshot: "toolkit-app-alipay.jpg",
                stores: "iOS & Android",
              }}
            />
            <AppCardComponent
              card={{
                type: "app",
                title: "Canton Fair App",
                desc: "The official buyer app. Badge scanning, exhibitor search, hall navigation, and booking interpreter services on-site.",
                screenshot: "toolkit-app-cantonfair.jpg",
                stores: "iOS & Android",
              }}
            />
          </CardGrid>
        </div>

        {/* Maps */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Download Chinese map apps
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            Google Maps does not work well in China. These are what locals use — and they have English modes.
          </p>
          <CardGrid count={2}>
            <AppCardComponent
              card={{
                type: "app",
                title: "Baidu Maps",
                desc: "China's most-used navigation app. Covers metro, bus, taxi, and walking directions. This is what locals use daily.",
                screenshot: "toolkit-app-baidumaps.jpg",
                stores: "iOS & Android",
              }}
            />
            <AppCardComponent
              card={{
                type: "app",
                title: "Gaode Maps (Amap)",
                desc: "Another popular Chinese map app. Very accurate for walking navigation around the Canton Fair complex.",
                screenshot: "toolkit-app-gaode.jpg",
                stores: "iOS & Android",
              }}
            />
          </CardGrid>
        </div>

        {/* Research exhibitors */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Research exhibitors and build your hit list
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            Do not walk into Canton Fair without a plan. 48,000+ exhibitors across halls the size of airports. Without a target list, you will wander for hours and come home with nothing specific. This one step separates productive trips from expensive holidays.
          </p>
          <CardGrid count={2}>
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Exhibitor Search",
                desc: "Browse exhibitors by category and pre-schedule meetings. Know exactly which booths you are walking to on day 1.",
                href: "https://www.cantonfair.org.cn/en-US/",
                domain: "cantonfair.org.cn",
                screenshot: "toolkit-cantonfair-exhibitors.jpg",
              }}
            />
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Venue Map & Buyer Guide",
                desc: "See which halls match your product categories. Download the floor plan so you can plan your route before you arrive.",
                href: "https://www.cantonfair.org.cn/en-US/customPages/buyerGuide",
                domain: "cantonfair.org.cn",
                screenshot: "toolkit-cantonfair-map.jpg",
              }}
            />
          </CardGrid>
        </div>

        {/* Prepare specs */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Prepare your product specs
          </h3>
          <CardGrid count={1}>
            <GuidanceCardComponent
              card={{
                type: "guidance",
                title: "Put Your Specs on USB and Phone",
                desc: "If you know what you want to source, prepare a USB drive and phone copy with: product specifications, technical drawings, target pricing, required certifications, and packaging requirements. Prepare them in English and Chinese if possible. Suppliers take you seriously when you arrive with clear specs — and it reduces revision rounds later.",
              }}
            />
          </CardGrid>
        </div>
      </div>
    </TimelineSection>
  );
}
