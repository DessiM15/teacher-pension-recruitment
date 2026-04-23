"use client";

import { useTranslation } from "@/lib/language-context";

export function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    { value: "10+", label: t.stats.experience, suffix: " Years" },
    { value: "1,000s", label: t.stats.educators, suffix: "" },
    { value: "Nationwide", label: t.stats.districts, suffix: "" },
    { value: "Zero", label: t.stats.prospecting, suffix: "" },
  ];

  return (
    <section className="bg-cream border-y border-primary/20 py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i > 0 ? "sm:border-l sm:border-primary/20" : ""
              }`}
            >
              <p className="text-[2rem] sm:text-[2.5rem] font-bold leading-tight text-primary font-heading">
                {stat.value}
                <span className="text-[1.5rem] sm:text-[1.75rem]">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
