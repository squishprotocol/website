import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'How can I play for my appointment?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance?',
      answer: 'Answer 2',
    },
    {
      question: 'Do I need a referral?',
      answer: 'Answer 3',
    },
    {
      question: 'What are your opening hours?',
      answer: 'Answer 4',
    },
    {
      question: 'What can I expect at my first consultation?',
      answer: 'Answer 5',
    },
  ];

  return (
    <div>
      <section className="">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(index)}>
                  <h1 className="font-semibold text-gray-700 dark:text-white">{faq.question}</h1>

                  <span className="text-white bg-purple-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {activeIndex === index && (
                  <>
                    <hr className="border-gray-200 dark:border-gray-700"/>

                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
