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
      question: 'What is Squish Protocol?',
      answer: 'Squish Protocol is a DeFi farming platform that allows users to stake Squish Tokens and earn rewards in various cryptocurrencies.',
    },
    {
      question: 'What is the Squish Token?',
      answer: 'The Squish Token is the native token of the Squish Protocol. It provides access to the farming platform and other features of the Squish ecosystem.',
    },
    {
      question: 'How do I stake my Squish Tokens?',
      answer: 'You can stake your Squish Tokens by connecting your compatible wallet to the Squish Protocol farming platform and following the staking instructions.',
    },
    {
      question: 'What are the benefits of staking Squish Tokens?',
      answer: 'Staking Squish Tokens allows users to earn rewards in various cryptocurrencies. The longer the stake, the higher the rewards.',
    },
    {
      question: 'How do I withdraw my rewards?',
      answer: 'Rewards can be withdrawn from the Squish Protocol platform at any time, subject to the applicable lockup periods and withdrawal fees.',
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
