import { forwardRef, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Textarea } from '../ui/textarea'

interface InputFormProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

const TextAreaForm = forwardRef<HTMLTextAreaElement, InputFormProps>(
  (props, ref) => {
    const { register } = useFormContext()

    return (
      <Textarea
        id={props.name}
        className="border border-borderDefaultInput w-full py-2 px-3 font-medium placeholder:items-center placeholder:text-[#BAB5B5] placeholder:text-xs rounded-[6px] h-[36px] text-xs text-[#393939]"
        {...register(props.name)}
        {...props}
        ref={ref}
      />
    )
  },
)

TextAreaForm.displayName = 'TextAreaForm'

export { TextAreaForm }
