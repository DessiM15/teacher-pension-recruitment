"use client";

import {
  School,
  GraduationCap,
  Megaphone,
  HeadphonesIcon,
  Target,
  Monitor,
  Trophy,
  Rocket,
} from "lucide-react";
import { Hero } from "@/components/hero-video";
import { StatsBar } from "@/components/stats-bar";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { useTranslation } from "@/lib/language-context";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefitIcons = [School, GraduationCap, Megaphone, HeadphonesIcon];
const whyUsIcons = [Target, Monitor, Trophy, Rocket];

export default function Home() {
  const { t } = useTranslation();
  useScrollReveal();

  const benefits = [
    {
      icon: benefitIcons[0],
      title: t.benefits.schoolAccess,
      description: t.benefits.schoolAccessDesc,
    },
    {
      icon: benefitIcons[1],
      title: t.benefits.training,
      description: t.benefits.trainingDesc,
    },
    {
      icon: benefitIcons[2],
      title: t.benefits.marketing,
      description: t.benefits.marketingDesc,
    },
    {
      icon: benefitIcons[3],
      title: t.benefits.support,
      description: t.benefits.supportDesc,
    },
  ];

  const whyUsItems = [
    {
      icon: whyUsIcons[0],
      title: t.whyUs.noProspecting,
      description: t.whyUs.noProspectingDesc,
    },
    {
      icon: whyUsIcons[1],
      title: t.whyUs.technology,
      description: t.whyUs.technologyDesc,
    },
    {
      icon: whyUsIcons[2],
      title: t.whyUs.decadeProven,
      description: t.whyUs.decadeProvenDesc,
    },
    {
      icon: whyUsIcons[3],
      title: t.whyUs.careerGrowth,
      description: t.whyUs.careerGrowthDesc,
    },
  ];

  return (
    <>
      <Hero />

      <StatsBar />

      {/* What We Provide */}
      <section id="benefits" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
              {t.benefits.label}
            </p>
          </div>
          <SectionHeading
            title={t.benefits.title}
            subtitle={t.benefits.subtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Why Teacher's Pension */}
      <section id="why-us" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
              {t.whyUs.label}
            </p>
          </div>
          <SectionHeading
            title={t.whyUs.title}
            subtitle={t.whyUs.subtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsItems.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t.apply.title}
        description={t.apply.description}
        buttonText={t.apply.buttonText}
        buttonHref="#apply"
      />

      {/* Apply / Contact Form */}
      <section id="apply" className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
