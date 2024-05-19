'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Corners from '../corner/Corners';
import { ReactNode, useState } from 'react';

const buttonVariants = cva(
  'inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
  {
    variants: {
      variant: {
        // default: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        default: 'bg-white/10 text-neutral-50 hover:bg-white/90',
        outline: 'border border-[#232627] bg-white/0 hover:bg-white/90 hover:text-neutral-900 ',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80',
      },
      size: {
        default: 'px-8 py-5',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const hoveringColor = `zinc-800`;
  const textBaseStyle = `uppercase transition-all duration-300`;

  return (
    <button
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={(_) => {
        setIsHovering(false);
      }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Corners isHovering={isHovering} />
      <div className='overflow-hidden'>
        <div className={`${isHovering ? 'translate-y-[-100%] opacity-0' : 'opacity-100 text-white'} ${textBaseStyle}`}>{children}</div>
      </div>
      <div
        className={`${isHovering ? `translate-y-[0%] opacity-100 text-${hoveringColor}` : 'translate-y-[100%] opacity-0'} ${textBaseStyle} absolute`}
      >
        {children}
      </div>
    </button>
  );
};

export { Button, buttonVariants };
