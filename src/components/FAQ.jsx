import { useState } from 'react'

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const faqs = [
    {
      id: 1,
      question: 'How can I start learning English on this website?',
      answer:
        'You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also offer structured courses to guide you step by step.',
    },
    {
      id: 2,
      question: 'How can I contact support?',
      answer: 'You can reach us via email at support@englishJanala.com or through live chat.',
    },
    {
      id: 3,
      question: 'Do you offer team discounts?',
      answer: 'Yes! We offer discounts for teams of 5 or more members.',
    },
    {
      id: 4,
      question: 'Can I take IELTS prep if i enroll the course?',
      answer:
        'TBH, NO ! You just can learn some hundreds of vocabularies ! But we are planning to add IELTS prep course in future.',
    },
    {
      id: 5,
      question: 'Do you offer Certificate after completing course',
      answer: 'Yes! We offer certificate after successfully completing the course.',
    },
  ]

  return (
    <div
      id="faq"
      className="w-full p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center mt-10 mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        <span className="text-[#00BCFF]">Frequently</span> Asked Questions
      </h2>

      <div className="space-y-4 min-w-[80vw]">
        {faqs.map((faq) => (
          <div key={faq.id} className="rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openFAQ === faq.id ? '-' : '+'}</span>
            </button>
            {openFAQ === faq.id && (
              <div className="p-4 border-t text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
