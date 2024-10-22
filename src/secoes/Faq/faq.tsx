import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo suspendisse sed molestie risus, ac ultricies ex.',
  },
  {
    question: 'Suspendisse magna nulla, pellentesque rutrum?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum.',
  },
  {
    question: 'Nunc at est sit amet erat ultrices gravida?',
    answer: 'Suspendisse magna nulla, pellentesque rutrum at est sit amet erat ultrices gravida.',
  },
  {
    question: 'Curabitur elementum ante orci?',
    answer: 'Lacus id venenatis convallis, justo leo posuere purus?',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-6 relative">
      <h2 className="text-4xl font-bold text-center text-[#0277EE] mb-8">Perguntas Frequentes</h2>
      <div className="max-w-4xl mx-auto  p-6 rounded-lg ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-[#121214]">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-[#121214]" />
              ) : (
                <FaChevronDown className="text-[#121214]" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 text-base pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
