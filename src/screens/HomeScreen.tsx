import type * as React from 'react'
import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { CTASection } from '@/components/sections/CTA/CTASection'
import { HeroSection } from '@/components/sections/Hero/HeroSection'
import { PricingSection } from '@/components/sections/Pricing/PricingSection'
import { ProgramsSection } from '@/components/sections/Programs/ProgramsSection'
import { StatsBarSection } from '@/components/sections/StatsBar/StatsBarSection'
import { TestimonialsSection } from '@/components/sections/Testimonials/TestimonialsSection'
import { TrainersSection } from '@/components/sections/Trainers/TrainersSection'
import { siteContent } from '@/constants/content'
import { lazy, Suspense } from 'react'

const sectionFallback = <div className="section-frame h-40" aria-hidden="true" />
const footerFallback = <div className="section-frame h-24" aria-hidden="true" />

const LazyTrainersSection = lazy(async () => ({ default: TrainersSection }))
const LazyPricingSection = lazy(async () => ({ default: PricingSection }))
const LazyTestimonialsSection = lazy(async () => ({ default: TestimonialsSection }))
const LazyCTASection = lazy(async () => ({ default: CTASection }))
const LazyFooter = lazy(async () => ({ default: Footer }))

const HomeScreen: React.FC = () => {
  return (
    <div className="page-shell">
      <Navbar siteContent={siteContent} />

      <main>
        <HeroSection id="hero" content={siteContent.hero} />
        <StatsBarSection stats={siteContent.stats} />
        <ProgramsSection
          id="programs"
          eyebrow={siteContent.programs.eyebrow}
          title={siteContent.programs.title}
          description={siteContent.programs.description}
          items={siteContent.programs.items}
        />

        <Suspense fallback={sectionFallback}>
          <LazyTrainersSection
            id="trainers"
            eyebrow={siteContent.trainers.eyebrow}
            title={siteContent.trainers.title}
            description={siteContent.trainers.description}
            items={siteContent.trainers.items}
          />
        </Suspense>

        <Suspense fallback={sectionFallback}>
          <LazyPricingSection
            id="pricing"
            eyebrow={siteContent.pricing.eyebrow}
            title={siteContent.pricing.title}
            description={siteContent.pricing.description}
            monthlyLabel={siteContent.pricing.monthlyLabel}
            yearlyLabel={siteContent.pricing.yearlyLabel}
            yearlyBadge={siteContent.pricing.yearlyBadge}
            popularLabel={siteContent.pricing.popularLabel}
            toggleAriaLabel={siteContent.pricing.toggleAriaLabel}
            tiers={siteContent.pricing.tiers}
          />
        </Suspense>

        <Suspense fallback={sectionFallback}>
          <LazyTestimonialsSection
            id="testimonials"
            eyebrow={siteContent.testimonials.eyebrow}
            title={siteContent.testimonials.title}
            description={siteContent.testimonials.description}
            regionLabel={siteContent.testimonials.regionLabel}
            previousLabel={siteContent.testimonials.previousLabel}
            nextLabel={siteContent.testimonials.nextLabel}
            items={siteContent.testimonials.items}
          />
        </Suspense>

        <Suspense fallback={sectionFallback}>
          <LazyCTASection id="join" content={siteContent.cta} />
        </Suspense>
      </main>

      <Suspense fallback={footerFallback}>
        <LazyFooter content={siteContent.footer} />
      </Suspense>
    </div>
  )
}

export default HomeScreen
