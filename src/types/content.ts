export type ProgramIconKey =
  | 'dumbbell'
  | 'timer'
  | 'heartPulse'
  | 'zap'
  | 'shield'
  | 'flame'

export type SocialIconKey = 'instagram' | 'linkedin' | 'twitter'

export interface ActionLink {
  readonly label: string
  readonly href: string
  readonly ariaLabel: string
}

export type NavItem = ActionLink
export interface HeroContent {
  readonly eyebrow: string
  readonly headlineWords: readonly string[]
  readonly description: string
  readonly primaryAction: ActionLink
  readonly secondaryAction: ActionLink
  readonly statChips: readonly string[]
  readonly previewEyebrow: string
  readonly previewTitle: string
  readonly previewDescription: string
  readonly previewMetrics: readonly StatItem[]
  readonly previewCards: readonly string[]
}

export interface StatItem {
  readonly label: string
  readonly value: number
  readonly prefix?: string
  readonly suffix?: string
}

export interface ProgramItem {
  readonly title: string
  readonly description: string
  readonly icon: ProgramIconKey
}

export interface SocialLink extends ActionLink {
  readonly icon: SocialIconKey
}

export interface TrainerProfile {
  readonly name: string
  readonly specialty: string
  readonly bio: string
  readonly imageSrc: string
  readonly imageAlt: string
  readonly socials: readonly SocialLink[]
}

export type BillingCycle = 'monthly' | 'yearly'

export interface PricingTier {
  readonly name: string
  readonly description: string
  readonly monthlyPrice: number
  readonly yearlyPrice: number
  readonly featureIntro: string
  readonly features: readonly string[]
  readonly cta: ActionLink
  readonly isPopular?: boolean
}

export interface Testimonial {
  readonly quote: string
  readonly name: string
  readonly role: string
}

export interface CTAContent {
  readonly eyebrow: string
  readonly headline: string
  readonly description: string
  readonly formLabel: string
  readonly inputLabel: string
  readonly inputPlaceholder: string
  readonly submitLabel: string
  readonly successMessage: string
  readonly validationMessage: string
}

export interface FooterLinkGroup {
  readonly title: string
  readonly links: readonly ActionLink[]
}

export interface FooterContent {
  readonly brandLabel: string
  readonly description: string
  readonly newsletterLabel: string
  readonly newsletterPlaceholder: string
  readonly newsletterButton: string
  readonly newsletterSuccess: string
  readonly newsletterValidation: string
  readonly legal: string
  readonly linkGroups: readonly FooterLinkGroup[]
  readonly socials: readonly SocialLink[]
}

export interface SiteContent {
  readonly brandName: string
  readonly navAriaLabel: string
  readonly themeToggleLabel: string
  readonly darkThemeLabel: string
  readonly lightThemeLabel: string
  readonly mobileMenuButtonLabel: string
  readonly mobileMenuTitle: string
  readonly mobileMenuDescription: string
  readonly closeMenuLabel: string
  readonly navigation: readonly NavItem[]
  readonly hero: HeroContent
  readonly stats: readonly StatItem[]
  readonly programs: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly items: readonly ProgramItem[]
  }
  readonly trainers: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly items: readonly TrainerProfile[]
  }
  readonly pricing: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly monthlyLabel: string
    readonly yearlyLabel: string
    readonly yearlyBadge: string
    readonly popularLabel: string
    readonly toggleAriaLabel: string
    readonly tiers: readonly PricingTier[]
  }
  readonly testimonials: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly regionLabel: string
    readonly previousLabel: string
    readonly nextLabel: string
    readonly items: readonly Testimonial[]
  }
  readonly cta: CTAContent
  readonly footer: FooterContent
}
