import Image from "next/image"
import featuresData from "./featuresData";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="justify-center lg:p-6 text-center rounded-sm lg:text-left">
          <h2 className="text-5xl font-bold leadi sm:text-6xl">Servicios exclusivos para vos</h2>
          <p className="mt-6 text-xl mb-12 text-justify">Te ofrecemos un sistema de gestión para optimizar tus operaciones, desarrollar la presencia online de tu empresa para destacar en el mundo digital y un servicio de gestión administrativa para liberarte de las tareas tediosas. Nuestro equipo se adapta a tus necesidades específicas brindando soluciones personalizadas. Ahorra tiempo y dinero <b>¡Trabajemos juntos para potenciar tu negocio!</b>
          </p>
        </div>
        <div className="lg:space-y-12">
          {featuresData.map((feature) => (
            <div className={feature.flexRowReverse ? 'flex flex-col my-5 lg:p-5 overflow-hidden rounded-md lg:flex-row-reverse dark:bg-gray-500' : 'flex flex-col bg-slate-50 my-5 lg:p-5 overflow-hidden rounded-md lg:flex-row dark:bg-gray-500'} key={feature.id}>
              <Image
                src={feature.img}
                alt={feature.altImg}
                className="h-80 dark:bg-gray-500 aspect-video p-2"
                width={500}
                height={500}
                style={{
                  objectFit: 'contain', // cover, contain, none
                }}
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 dark:text-white">
                <h3 className="text-4xl font-bold mb-2 underline decoration-[#FFCC00] hover:animate-bounce hover:cursor-pointer">{feature.title}</h3>
                <span className="text-xl uppercase dark:text-gray-200">{feature.subtitle}</span>
                <p className="my-6 text-justify text-lg dark:text-gray-200">{feature.description}</p>
                <div className="mt-10 space-y-20">
                  <div className="w-full hover:animate-bounce">
                    <Link
                      href={feature.referencia}
                    >
                      <button type="button" className="self-start m-auto inset-0 text-xl w-full font-semibold leading-7 text-center text-gray-800">
                        <div className="flex-1 h-full mx-auto">
                          <div className="flex w-full text-white bg-[#8800aa] shadow rounded-lg py-4 px-16 justify-center align-middle dark:bg-[#2c8cf4]">
                          <span>
                            {undefined ? '' : feature.action}
                            <span className="ms-4 text-2xl">
                              &#8594;
                            </span>
                          </span>

                          </div>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >
    </>
  )
}

export default Features;