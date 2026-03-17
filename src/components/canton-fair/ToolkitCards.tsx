"use client";

import basePath from "@/lib/basePath";

/* ─── Shared card types & components used across timeline sections ─── */

export type WebsiteCard = {
  type: "website";
  title: string;
  desc: string;
  href: string;
  domain: string;
  screenshot: string;
};

export type AppCard = {
  type: "app";
  title: string;
  desc: string;
  screenshot: string;
  stores: string;
};

export type GuidanceCard = {
  type: "guidance";
  title: string;
  desc: string;
};

export type ToolkitCard = WebsiteCard | AppCard | GuidanceCard;

export function WebsiteCardComponent({ card }: { card: WebsiteCard }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-wf-border overflow-hidden card-hover block"
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={`${basePath}/images/toolkit/${card.screenshot}`}
          alt={`${card.title} — ${card.domain}`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-sm text-wf-text mb-1">
          {card.title}
        </h4>
        <p className="text-xs text-wf-text-muted leading-relaxed mb-3">
          {card.desc}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-wf-red group-hover:underline">
          Visit {card.domain}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export function AppCardComponent({ card }: { card: AppCard }) {
  return (
    <div className="bg-white rounded-xl border border-wf-border p-4 card-hover flex gap-4 items-start">
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 border border-wf-border">
        <img
          src={`${basePath}/images/toolkit/${card.screenshot}`}
          alt={card.title}
          className="w-full h-full object-cover object-[15%_25%]"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-wf-text mb-1">
          {card.title}
        </h4>
        <p className="text-xs text-wf-text-muted leading-relaxed mb-2">
          {card.desc}
        </p>
        <span className="text-[11px] text-wf-text-muted/70 font-medium">
          {card.stores}
        </span>
      </div>
    </div>
  );
}

export function GuidanceCardComponent({ card }: { card: GuidanceCard }) {
  return (
    <div className="bg-wf-bg-warm rounded-xl border border-dashed border-wf-border p-5">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-wf-text mb-1">
            {card.title}
          </h4>
          <p className="text-xs text-wf-text-muted leading-relaxed">
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Adaptive grid for cards ─── */

export function CardGrid({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
}) {
  return (
    <div
      className={`grid gap-4 ${
        count === 1
          ? "max-w-md"
          : count === 2
            ? "sm:grid-cols-2 max-w-3xl"
            : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}
