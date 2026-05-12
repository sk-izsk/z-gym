import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusiness,
  Dumbbell,
  Flame,
  Globe,
  HeartPulse,
  Send,
  Shield,
  TimerReset,
  Zap,
} from 'lucide-react'
import type { ProgramIconKey, SocialIconKey } from '@/types/content'

const programIconMap: Record<ProgramIconKey, LucideIcon> = {
  dumbbell: Dumbbell,
  timer: TimerReset,
  heartPulse: HeartPulse,
  zap: Zap,
  shield: Shield,
  flame: Flame,
}

const socialIconMap: Record<SocialIconKey, LucideIcon> = {
  instagram: Globe,
  linkedin: BriefcaseBusiness,
  twitter: Send,
}

export const getProgramIcon = (icon: ProgramIconKey) => {
  return programIconMap[icon]
}

export const getSocialIcon = (icon: SocialIconKey) => {
  return socialIconMap[icon]
}
