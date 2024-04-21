import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(`flex flex-col gap-[4px] w-full`, className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Field.displayName = 'Form.Field'

export { Field }
