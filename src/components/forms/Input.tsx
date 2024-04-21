import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input, InputProps } from '../ui/input'

interface InputFormProps extends InputProps {
  name: string
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>((props, ref) => {
  const { register } = useFormContext()

  return (
    <Input
      id={props.name}
      className="border border-borderDefaultInput w-full py-2 px-3 font-medium placeholder:items-center placeholder:text-[#BAB5B5] placeholder:text-xs rounded-[6px] h-[36px] text-xs text-[#393939]"
      {...register(props.name)}
      {...props}
      ref={ref}
    />
  )
})

InputForm.displayName = 'InputForm'

export { InputForm }
