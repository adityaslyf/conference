import React, { useState } from "react";

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleContent = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <section id="faq" >
      <div  className="pt-20 mt-20">
        <div className="py-8 px-12 mx-auto max-w-screen-xl sm:py-16 lg:px-20">
          <div className="flex flex-row justify-center">
            <h2 className="mb-8 text-4xl font-Montserrat tracking-tight font-extrabold text-[#212A5C]">Frequently asked questions</h2>
          </div>
          <div className="pt-4 text-left font-Roboto border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {data.map((datas, index) => {
              return (
                <div className="mb-4 pb-2 border-b" key={index}>
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                      </svg>
                      {datas.question}
                    </h3>
                    <button onClick={() => toggleContent(index)}>
                      <svg className={`w-8 -mt-6 h-8 ${isOpen[index] ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 15l5-5H5z" />
                      </svg>
                    </button>
                  </div>
                  {isOpen[index] && (
                    <p className="text-gray-500 dark:text-gray-400 ">{datas.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
    </div>
      </section>
  );
};

export default Faq;
