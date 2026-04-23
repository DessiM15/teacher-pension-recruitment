"use client";

import { useTranslation } from "@/lib/language-context";
import { SectionHeading } from "@/components/section-heading";
import { ClipboardCheck, Users, Heart } from "lucide-react";

const stepIcons = [ClipboardCheck, Users, Heart];

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: stepIcons[0],
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      number: "02",
      icon: stepIcons[1],
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      number: "03",
      icon: stepIcons[2],
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
            {t.howItWorks.label}
          </p>
        </div>
        <SectionHeading
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="reveal relative text-center px-6"
              >
                {/* Step number */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold font-heading">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center">
                  <Icon className="h-6 w-6 text-primary/60" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
