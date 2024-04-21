import Image from 'next/image'
import textLogo from '@/assets/aboutStephanieTxt.svg'
import { Button } from './ui/button'
import Link from 'next/link'

export function AboutStephanie() {
  return (
    <div
      id="about-stephanie"
      className="flex flex-col xl:grid xl:grid-cols-2  lg:h-[816px] overflow-hidden"
    >
      <div className="w-full h-full max-h-[800px]">
        <Image
          src={
            'https://s3-alpha-sig.figma.com/img/199a/5bb1/ac4088a0b1e0f8d9b693668d43901508?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvoTsP9EY2CHORs7cNsCgnOfjhvu5qxvV4HB8yuuF1p0qFxJBH1fq25k3KEGuvr7jmqRv1CCLI7rx61L-OugZO11G-3bVi7vXluHKoZ7OAujx0jTsqUpGwwlHd-lhRc4ehsJU0E5~L6uqSsOcMzpcr~nSs66e6HJpB9omIEYEf94aCYcSASjQAvB617oiAf9sD790u3DxIv0C6GlDtY4zifJJWA9NWQwdRCq5QImDCQ3Hg0iBkazZL8-VNOtwwHYzcm2ikT6DI-kAhKNzdUurXZpfepT1hwEYeB0RY0MKm59o3GhWBOmJbZHIMEW9sKq0ClAsDWlhe8OQh~oJQ0yaQ__'
          }
          width={720}
          height={816}
          alt="Doutora Stephanie Angelo"
          className="object-cover object-top w-full"
        />
      </div>
      <div className="bg-slate-100 flex items-center py-8 xl:py-0  w-full h-full">
        <div className="flex flex-col gap-6 xl:px-20 px-6 w-full  ">
          <Image src={textLogo} alt="" className="object-cover lg:w-full" />
          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Conheça a trajetória de vida e carreira profissional inspiradora da
            Dra. Stéphanie Angelo.
          </span>

          <Link href={'/stephanie-angelo'}>
            <Button>Leia mais sobre a Dra. Stéfanie Angelo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
