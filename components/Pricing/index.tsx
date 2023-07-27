import pricingData from "./pricingData"
import { siteConfig } from "@/config/site"
import Link from "next/link"

const Pricing = () => {
  return (
    <>
      <section className="py-20 bg-[#ffcc00] dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-10 mx-auto">
          <div className="max-w-max mx-auto mb-20 text-center">
            <h2 className="text-4xl font-bold lg:text-5xl">Descubrí el plan que necesitas</h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {pricingData.map((pricing) => (
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0" key={pricing.id}>
                <div className="flex flex-col bg-white p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900 dark:text-white">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{pricing.title}</h4>
                    <span className="text-6xl font-bold">
                      {pricing.price}
                      <span className="text-sm tracki">{pricing.period}</span>
                    </span>
                  </div>
                  <p className="mt-3 leadi dark:text-white">{pricing.description}</p>
                  <ul className="flex-1 mb-6 dark:text-white">
                    {
                      pricing.includes.map(filterIncludes => (
                        <li className="flex mb-2 space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-white">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>{filterIncludes}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <Link
                    href={siteConfig.links.whatsapp}
                  >
                    <button type="button" className="transition duration-700 ease-in-out inline-block w-full px-5 py-3 font-semibold tracki text-lg text-center rounded text-white bg-[#8800aa] dark:bg-[#2c8cf4]">{pricing.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing