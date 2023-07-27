import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const imageStyle = {
  marginLeft: '25px',
}

const Bye = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-96 bg-fixed bg-cover bg-center flex justify-center items-center bg-[url('/images/space-bg.jpg')]">
        <div className="contents content-center p-4 py-20 mx-auto md:p-10">
          <div className="hidden lg:contents">
            <Image
              src="/images/rocket.svg"
              alt="rocket"
              width={500}
              height={500}
              style={imageStyle}
            />
          </div>
          <div>
            <h1 className="text-4xl antialiased p-8 font-semibold leadi text-center lg:text-left text-white">“El mejor momento para plantar un árbol fue hace veinte años. El segundo mejor momento es ahora.”</h1>
            <p className="px-8 text-xl antialiased text-white italic">Proverbio chino</p>
            <div className="flex flex-row justify-center pt-8 mb-10 lg:mb-0">
              <Link
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-[#ffcc00]"
              >
                HACENOS TU CONSULTA
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Bye;