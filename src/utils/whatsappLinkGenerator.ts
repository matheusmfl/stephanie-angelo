export enum WhatsappNumbersEnum {
  CURSOS = '5551998717514',
  CLINICA = '5551998717896',
}

type createWhatsappLink = {
  phoneNumber: WhatsappNumbersEnum
  message: string
}

export function createWhatsAppLink({
  message,
  phoneNumber,
}: createWhatsappLink) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappLink = `https://wa.me/send?phone=${phoneNumber}&text=${encodedMessage}`
  return whatsappLink
}
