import type { SiteContent } from '@/types/content'

export const siteContent: SiteContent = {
  brandName: 'Z GYM',
  navAriaLabel: 'Primary navigation',
  themeToggleLabel: 'Toggle color theme',
  darkThemeLabel: 'Dark',
  lightThemeLabel: 'Light',
  mobileMenuButtonLabel: 'Open navigation menu',
  mobileMenuTitle: 'Navigation',
  mobileMenuDescription: 'Jump to each section of the Z Gym experience.',
  closeMenuLabel: 'Close navigation menu',
  navigation: [
    { label: 'Programs', href: '#programs', ariaLabel: 'Scroll to programs section' },
    { label: 'Trainers', href: '#trainers', ariaLabel: 'Scroll to trainers section' },
    { label: 'Pricing', href: '#pricing', ariaLabel: 'Scroll to pricing section' },
    { label: 'Results', href: '#testimonials', ariaLabel: 'Scroll to testimonials section' },
    { label: 'Join', href: '#join', ariaLabel: 'Scroll to join section' },
  ],
  hero: {
    eyebrow: 'Editorial strength club',
    headlineWords: ['Train', 'hard.', 'Recover', 'smart.', 'Look', 'unstoppable.'],
    description:
      'A performance-first gym experience with elite coaching, immersive classes, and recovery spaces built for people who want visible momentum.',
    primaryAction: {
      label: 'Start your trial',
      href: '#join',
      ariaLabel: 'Scroll to the trial form',
    },
    secondaryAction: {
      label: 'View membership tiers',
      href: '#pricing',
      ariaLabel: 'Scroll to membership pricing',
    },
    statChips: ['24/7 access', 'Recovery lab', 'Coach-led programming'],
    previewEyebrow: 'Performance console',
    previewTitle: 'Structured output. Cleaner progression.',
    previewDescription:
      'A visual snapshot of the weekly split, load targets, and recovery rhythm members move through.',
    previewMetrics: [
      { label: 'Average weekly sessions', value: 5, suffix: 'x' },
      { label: 'Coach feedback windows', value: 2, suffix: '/wk' },
      { label: 'Recovery modalities', value: 6 },
    ],
    previewCards: ['Upper strength', 'Sprint intervals', 'Mobility restore', 'Recovery circuit'],
  },
  stats: [
    { label: 'Active members', value: 3200, suffix: '+' },
    { label: 'Weekly classes', value: 96, suffix: '+' },
    { label: 'Elite trainers', value: 18 },
    { label: 'Years refining results', value: 12 },
  ],
  programs: {
    eyebrow: 'Program architecture',
    title: 'Every block is designed for a different kind of athlete.',
    description:
      'Move through strength, conditioning, recovery, and hybrid performance tracks without losing progression or coaching quality.',
    items: [
      {
        title: 'Strength Lab',
        description: 'Progressive overload, barbell cycles, and measurable PR tracking.',
        icon: 'dumbbell',
      },
      {
        title: 'Conditioning Grid',
        description: 'Hybrid intervals that build engine capacity without killing form.',
        icon: 'timer',
      },
      {
        title: 'Cardio Reset',
        description: 'Heart-rate guided endurance blocks for sustainable stamina.',
        icon: 'heartPulse',
      },
      {
        title: 'Explosive Power',
        description: 'Sprint, sled, and plyometric sessions built for speed transfer.',
        icon: 'zap',
      },
      {
        title: 'Mobility Shield',
        description: 'Joint resilience sessions that keep heavy training repeatable.',
        icon: 'shield',
      },
      {
        title: 'Metabolic Burn',
        description: 'High-output finishers engineered for serious calorie turnover.',
        icon: 'flame',
      },
    ],
  },
  trainers: {
    eyebrow: 'Coaching roster',
    title: 'You are coached by specialists, not generic floor staff.',
    description:
      'Each coach owns a lane, from strength cycles to conditioning and recovery, so every session has a clear performance lens.',
    items: [
      {
        name: 'Maya Cross',
        specialty: 'Strength Director',
        bio: 'Builds barbell progressions for athletes chasing power and body recomposition.',
        imageSrc:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Strength trainer Maya Cross standing in a gym',
        socials: [
          { label: 'Instagram', href: 'https://instagram.com', ariaLabel: 'Visit Maya on Instagram', icon: 'instagram' },
          { label: 'LinkedIn', href: 'https://linkedin.com', ariaLabel: 'Visit Maya on LinkedIn', icon: 'linkedin' },
        ],
      },
      {
        name: 'Jalen Ward',
        specialty: 'Conditioning Coach',
        bio: 'Leads hybrid endurance and interval blocks for field-ready performance.',
        imageSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Conditioning coach Jalen Ward in a training studio',
        socials: [
          { label: 'Instagram', href: 'https://instagram.com', ariaLabel: 'Visit Jalen on Instagram', icon: 'instagram' },
          { label: 'Twitter', href: 'https://twitter.com', ariaLabel: 'Visit Jalen on Twitter', icon: 'twitter' },
        ],
      },
      {
        name: 'Selene Hart',
        specialty: 'Recovery Lead',
        bio: 'Programs mobility and regeneration blocks that keep heavy weeks sustainable.',
        imageSrc:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Recovery coach Selene Hart smiling inside a wellness gym',
        socials: [
          { label: 'Instagram', href: 'https://instagram.com', ariaLabel: 'Visit Selene on Instagram', icon: 'instagram' },
          { label: 'LinkedIn', href: 'https://linkedin.com', ariaLabel: 'Visit Selene on LinkedIn', icon: 'linkedin' },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: 'Membership system',
    title: 'Pick the rhythm that fits your ambition.',
    description:
      'All tiers include onboarding and app-based programming. Annual billing sharpens the rate for members who want long-term consistency.',
    monthlyLabel: 'Monthly',
    yearlyLabel: 'Yearly',
    yearlyBadge: 'Save 18%',
    popularLabel: 'Popular',
    toggleAriaLabel: 'Toggle membership billing period',
    tiers: [
      {
        name: 'Pulse',
        description: 'Best for members building consistent training habits.',
        monthlyPrice: 79,
        yearlyPrice: 65,
        featureIntro: 'Includes',
        features: ['Unlimited open gym', '2 coach check-ins monthly', 'Recovery lounge access'],
        cta: { label: 'Choose Pulse', href: '#join', ariaLabel: 'Select Pulse membership and go to join form' },
      },
      {
        name: 'Forge',
        description: 'Built for people who want coaching structure and serious progress.',
        monthlyPrice: 129,
        yearlyPrice: 105,
        featureIntro: 'Everything in Pulse, plus',
        features: ['4 coached classes weekly', 'Body composition scans', 'Priority recovery bookings'],
        cta: { label: 'Choose Forge', href: '#join', ariaLabel: 'Select Forge membership and go to join form' },
        isPopular: true,
      },
      {
        name: 'Apex',
        description: 'High-touch training for competitive or high-accountability goals.',
        monthlyPrice: 189,
        yearlyPrice: 154,
        featureIntro: 'Everything in Forge, plus',
        features: ['Weekly personal coaching', 'Nutrition strategy calls', 'Performance testing blocks'],
        cta: { label: 'Choose Apex', href: '#join', ariaLabel: 'Select Apex membership and go to join form' },
      },
    ],
  },
  testimonials: {
    eyebrow: 'Member outcomes',
    title: 'The strongest signal is what members say after the work compounds.',
    description:
      'Retention comes from visible progress, coaching trust, and an atmosphere that feels more like a performance club than a commodity gym.',
    regionLabel: 'Member testimonial carousel',
    previousLabel: 'Show previous testimonial',
    nextLabel: 'Show next testimonial',
    items: [
      {
        quote:
          'I came in for conditioning and stayed because every coach knew exactly how to progress my weak points without guesswork.',
        name: 'Ari Monroe',
        role: 'Member for 2 years',
      },
      {
        quote:
          'The space feels premium, but the real difference is the structure. I stopped drifting between workouts and started seeing measurable change.',
        name: 'Leah Cortez',
        role: 'Strength cycle member',
      },
      {
        quote:
          'Recovery is treated like part of performance here. That changed how often I can train hard without falling apart midweek.',
        name: 'Marcus Vale',
        role: 'Hybrid athlete',
      },
    ],
  },
  cta: {
    eyebrow: 'Start now',
    headline: 'Claim a seven-day performance trial and get your first coaching blueprint.',
    description:
      'Tell us where you want to improve and we will map the first week around strength, conditioning, and recovery priorities.',
    formLabel: 'Trial signup form',
    inputLabel: 'Email address',
    inputPlaceholder: 'name@domain.com',
    submitLabel: 'Claim your trial',
    successMessage: 'Your trial request is queued. Expect a welcome plan in your inbox.',
    validationMessage: 'Enter a valid email address to continue.',
  },
  footer: {
    brandLabel: 'Z Gym performance club',
    description:
      'A dark-floor training space for members who want measurable progression and a sharper physical identity.',
    newsletterLabel: 'Newsletter signup form',
    newsletterPlaceholder: 'Weekly performance notes',
    newsletterButton: 'Join newsletter',
    newsletterSuccess: 'You are subscribed to the weekly performance notes.',
    newsletterValidation: 'Enter a valid email address before subscribing.',
    legal: '© 2026 Z Gym. Built for disciplined momentum.',
    linkGroups: [
      {
        title: 'Explore',
        links: [
          { label: 'Programs', href: '#programs', ariaLabel: 'Scroll to programs section' },
          { label: 'Pricing', href: '#pricing', ariaLabel: 'Scroll to pricing section' },
        ],
      },
      {
        title: 'Visit',
        links: [
          { label: 'Membership', href: '#join', ariaLabel: 'Scroll to join section' },
          { label: 'Testimonials', href: '#testimonials', ariaLabel: 'Scroll to testimonials section' },
        ],
      },
    ],
    socials: [
      { label: 'Instagram', href: 'https://instagram.com', ariaLabel: 'Visit Z Gym on Instagram', icon: 'instagram' },
      { label: 'LinkedIn', href: 'https://linkedin.com', ariaLabel: 'Visit Z Gym on LinkedIn', icon: 'linkedin' },
      { label: 'Twitter', href: 'https://twitter.com', ariaLabel: 'Visit Z Gym on Twitter', icon: 'twitter' },
    ],
  },
}
