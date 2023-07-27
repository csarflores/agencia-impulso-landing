import faqData from "./faqData"

const Faq = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 py-12">
        <div className="container flex flex-col pt-12 justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki uppercase">Como trabajamos</p>
          <h2 className="text-5xl font-bold leadi sm:text-6xl">Preguntas frecuentes</h2>
          <div className="flex flex-col divide-y mt-12 sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            {faqData.map((faq) =>
              <details key={faq.id}>
                <summary className="py-6 text-lg outline-none cursor-pointer focus:underline">{faq.ask}</summary>
                <div className="px-4 pb-4">
                  <p>{faq.answer}</p>
                </div>
              </details>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq