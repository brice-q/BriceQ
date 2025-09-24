// Animation utility types and helpers for TypeScript
export interface AnimationProps {
  delay?: 'delay-75' | 'delay-100' | 'delay-150' | 'delay-200' | 'delay-300' | 'delay-500' | 'delay-700' | 'delay-1000';
  duration?: 'duration-200' | 'duration-300' | 'duration-500' | 'duration-700' | 'duration-1000';
}

export type AnimationType = 
  | 'animate-fade-in'
  | 'animate-fade-in-up'
  | 'animate-fade-in-down'
  | 'animate-slide-in-left'
  | 'animate-slide-in-right'
  | 'animate-scale-in'
  | 'animate-typewriter'
  | 'animate-float'
  | 'animate-glow';

export const getAnimationClasses = (
  animation: AnimationType,
  delay: AnimationProps['delay'] = 'delay-100',
  duration: AnimationProps['duration'] = 'duration-300'
): string => {
  return `${animation} ${delay} ${duration}`;
};

// Staggered animation delays for multiple elements
export const staggeredDelays = [
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-500',
  'delay-700'
] as const;

// Responsive animation classes
export const responsiveAnimations = {
  mobile: 'motion-reduce:animate-none sm:animate-none',
  tablet: 'md:animate-fade-in-up',
  desktop: 'lg:animate-fade-in-up'
} as const;
