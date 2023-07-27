"use client"

import Link from "next/link";
import Image from "next/image"
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 p-6 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center lg:p-6 text-center lg:max-w-lg xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leadi lg:text-7xl">Somos tu <span className="underline decoration-[#FFCC00]">aliado</span> en transformación digital</h1>
            <p className="mt-6 text-lg mb-12 lg:text-justify">Si necesitas un sistema para administrar tu empresa, vender por internet o  un profesional que te ayude con la administración CONTACTANOS AHORA. Brindamos servicios de asesoría y acompañamiento a pequeños comercios en su proceso de adaptación y transformación digital.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start hover:animate-bounce">
              <Link
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer" 
                className="px-8 py-3 text-lg font-semibold rounded text-black bg-[#ffcc00]"
              >
                CONTACTAR AHORA
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src="/images/hero-image.svg"
              width={600}
              height={600}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;