import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { cn } from '@/utils/cn'

interface ContainerScrollProps {
  readonly titleComponent: React.ReactNode
  readonly children: React.ReactNode
  readonly className?: string
}

interface HeaderProps {
  readonly translate: MotionValue<number>
  readonly titleComponent: React.ReactNode
}

interface CardProps {
  readonly rotate: MotionValue<number>
  readonly scale: MotionValue<number>
  readonly children: React.ReactNode
  readonly className?: string
}

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const rotate = useTransform(scrollYProgress, [0, 1], [14, 0])
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.96, 1] : [0.92, 1])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -72])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex min-h-[70rem] items-start justify-center px-2 pb-8 pt-10 sm:min-h-[82rem] sm:px-4 lg:px-0',
        className,
      )}
    >
      <div className="relative w-full py-6 sm:py-12" style={{ perspective: '1200px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-6xl"
    >
      {titleComponent}
    </motion.div>
  )
}

const Card = ({ rotate, scale, children, className }: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        borderColor: 'var(--hero-border)',
        background:
          'linear-gradient(180deg, rgba(26, 26, 24, 0.98), rgba(9, 9, 8, 0.98))',
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className={cn(
        'mx-auto -mt-8 h-[31rem] w-full max-w-6xl rounded-[2rem] border p-2 sm:h-[38rem] sm:rounded-[2.5rem] sm:p-4',
        className,
      )}
    >
      <div
        className="h-full w-full overflow-hidden rounded-[1.6rem] border"
        style={{
          borderColor: 'var(--hero-border)',
          background:
            'radial-gradient(circle at top left, rgba(232,255,71,0.08), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
