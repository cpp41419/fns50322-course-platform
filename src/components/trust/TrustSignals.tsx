"use client";

import { Shield, CheckCircle, ExternalLink, Clock } from "lucide-react";

// Last verified date - update this when data is refreshed
export const LAST_VERIFIED = "2026-01-03";
export const DATA_SOURCE = "training.gov.au";

export function LastUpdatedBadge({ className = "" }: { className?: string }) {
  const date = new Date(LAST_VERIFIED);
  const formatted = date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs text-slate-500 ${className}`}>
      <Clock className="w-3 h-3" />
      <span>Data verified: {formatted}</span>
    </div>
  );
}

export function DataSourceBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://training.gov.au"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-600 transition-colors ${className}`}
    >
      <ExternalLink className="w-3 h-3" />
      <span>Source: {DATA_SOURCE}</span>
    </a>
  );
}

export function ASQAVerifiedBadge({
  rtoCode,
  status = "Active",
  compact = false
}: {
  rtoCode: string;
  status?: string;
  compact?: boolean;
}) {
  const isActive = status === "Active";

  if (compact) {
    return (
      <a
        href={`https://training.gov.au/Organisation/Details/${rtoCode}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-xs font-medium ${
          isActive ? "text-green-600" : "text-amber-600"
        }`}
      >
        <CheckCircle className="w-3 h-3" />
        RTO {rtoCode}
      </a>
    );
  }

  return (
    <a
      href={`https://training.gov.au/Organisation/Details/${rtoCode}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
        isActive
          ? "bg-green-50 text-green-700 hover:bg-green-100"
          : "bg-amber-50 text-amber-700 hover:bg-amber-100"
      }`}
    >
      <CheckCircle className="w-3.5 h-3.5" />
      <span>RTO {rtoCode} • {status}</span>
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

export function IndependentBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-medium ${className}`}>
      <Shield className="w-3.5 h-3.5" />
      <span>100% Independent</span>
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Shield className="w-3.5 h-3.5 text-brand-600" />
            <span>Independent & Unbiased</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5 text-slate-600">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
            <span>ASQA Data from training.gov.au</span>
          </div>
          <span className="text-slate-300">|</span>
          <LastUpdatedBadge />
        </div>
      </div>
    </div>
  );
}

export function ProviderTrustIndicators({
  rtoCode,
  status,
  showSource = true
}: {
  rtoCode: string;
  status: string;
  showSource?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ASQAVerifiedBadge rtoCode={rtoCode} status={status} />
      {showSource && <DataSourceBadge />}
      <LastUpdatedBadge />
    </div>
  );
}
