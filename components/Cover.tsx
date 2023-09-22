"use client";

import Image from "next/image"
import BG from '@/public/bg.jpg'
import Logo from '@/public/logo.svg'
import { motion } from "framer-motion"

export default function Cover() {
  return (
    <section className="w-screen min-h-screen relative flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Image layout="fill" objectFit="cover" objectPosition="center" className="z-0" src={BG} alt="background image by bridger tower" />
      </motion.div>
      <motion.div className="z-50 absolute top-0 right-0 -mt-2">
        <Image className="sticky top-0" src={Logo} alt="9d8 Logo" />
      </motion.div>
    </section>
  )
}
