import { forwardRef, LabelHTMLAttributes } from 'react'

import { Label } from '../ui/label'

interface LabelFormProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const LabelForm = forwardRef<HTMLLabelElement, LabelFormProps>((props, ref) => {
  return (
    <Label
      className="text-sm text-[#4D4D4D] font-semibold"
      ref={ref}
      {...props}
    />
  )
})

LabelForm.displayName = 'LabelForm'

export { LabelForm }
