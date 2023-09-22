import Image from "next/image"
import BG from '@/public/bg.jpg'
import Logo from '@/public/logo.svg'

export default function Cover() {
  return (
    <section className="w-screen h-screen relative">
      <Image layout="fill" objectFit="cover" objectPosition="center" className="z-0" src={BG} alt="background image by bridger tower" />
      <div className="z-50 absolute top-0 right-0 -mt-2">
        <Image src={Logo} alt="9d8 Logo" />
      </div>
    </section>
  )
}
