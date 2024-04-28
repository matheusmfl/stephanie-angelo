'use client'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field } from './forms/Field'
import { useRef } from 'react'
import { Form } from './forms'
import { Button } from './ui/button'
import ReactInputMask from 'react-input-mask'

import toast, { Toaster } from 'react-hot-toast'

const userContactFormSchema = z.object({
  name: z.string().min(3, { message: 'Por favor, insira seu nome :)' }),
  mail: z.string().email({ message: 'Por favor, insira um e-mail válido!' }),
  cellphone: z
    .string()
    .min(1, { message: 'Precisamos do seu número para te responder :)' }),
  message: z.string().min(5, {
    message: 'Por favor, insira uma mensagem com ao menos 5 dígitos.',
  }),
})

type UserRequestForm = z.infer<typeof userContactFormSchema>

export function FormContact() {
  const userForm = useForm<UserRequestForm>({
    resolver: zodResolver(userContactFormSchema),
  })

  const formContainerRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = userForm

  const onSubmit: SubmitHandler<UserRequestForm> = async (data) => {
    console.log(data)
    toast.success('Sucesso! Em breve retornaremos o contato!')
  }

  return (
    <section className="px-6 py-12 lg:px-20 lg:py-20 bg-[#F4F1F0]">
      <div className="shadow-md rounded-md overflow-hidden flex flex-col w-full">
        <div className="flex flex-col py-6 px-4 gap-3 bg-[#1A1A1A] text-[#F4F1F0]">
          <h2 className="text-2xl">
            FALE CONOSCO <br /> <strong>PODEMOS TE AJUDAR?</strong>
          </h2>

          <span className="text-base font-normal">
            Envie uma mensagem dizendo como podemos te ajudar{' '}
            <br className="hidden md:block" /> ou fale com a nossa equipe pelo
            WhatsApp
          </span>
        </div>
        <div className="bg-[#F4F1F0] flex flex-col gap-5 py-8 px-4 lg:py-10 lg:px-20 lg:gap-8">
          <span className="text-2xl text-[#4D4D4D] font-medium">Dados</span>
          <div className="flex flex-col gap-2">
            <FormProvider {...userForm}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <Field ref={formContainerRef}>
                  <Form.LabelForm id="name">Nome</Form.LabelForm>
                  <Form.InputForm {...register('name')}></Form.InputForm>
                  {errors.name && (
                    <span className="text-xs text-[#A64253] mt-[6px] font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </Field>
                <Field ref={formContainerRef}>
                  <Form.LabelForm id="cellphone">Telefone</Form.LabelForm>
                  <ReactInputMask
                    className="border border-borderDefaultInput w-full py-2 px-3 font-medium placeholder:items-center placeholder:text-[#BAB5B5] placeholder:text-xs rounded-[6px] h-[36px] text-xs text-[#393939]"
                    mask="(99) 99999-9999"
                    maskPlaceholder="(99) 99999-9999"
                    {...register('cellphone')}
                  />
                  {errors.cellphone && (
                    <span className="text-xs text-[#A64253] mt-[6px] font-medium">
                      {errors.cellphone.message}
                    </span>
                  )}
                </Field>
                <Field ref={formContainerRef}>
                  <Form.LabelForm id="mail">E-mail</Form.LabelForm>
                  <Form.InputForm {...register('mail')}></Form.InputForm>
                  {errors.mail && (
                    <span className="text-xs text-[#A64253] mt-[6px] font-medium">
                      {errors.mail.message}
                    </span>
                  )}
                  <Form.ErrorMessage field="mail" />
                </Field>
                <Field ref={formContainerRef}>
                  <Form.LabelForm id="mail">Mensagem</Form.LabelForm>
                  <Form.TextAreaForm
                    placeholder="Conteúdo da mensagem"
                    {...register('message')}
                  ></Form.TextAreaForm>
                  {errors.message && (
                    <span className="text-xs text-[#A64253] mt-[6px] font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </Field>

                <Button className="mt-5 max-w-fit bg-[#4D4D4D] text-[#F4F1F0] hover:bg-[#4D4D4D]/90 ">
                  Enviar Mensagem
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  )
}
