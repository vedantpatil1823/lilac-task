import Link from 'next/link';
export default function FAQ() {
    const faqs = [
      {
        question: "Do you offer in-person or online sessions?",
        answer: "I offer both in-person sessions at my Santa Monica office and secure telehealth appointments for residents throughout California."
      },
      {
        question: "What is your approach to treating trauma?",
        answer: "I utilize evidence-based modalities like EMDR and body-based techniques to help you process past experiences and find safety in the present moment."
      },
      {
        question: "How do I know if we are a good fit?",
        answer: "I offer a free 15-minute consultation to discuss your goals and ensure my collaborative, warm approach aligns with what you’re looking for."
      }
    ];
  
    return (
      <section className="px-10 py-24 bg-maya-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-maya-sage text-center mb-12">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-maya-sage/10 pb-6">
                <h3 className="text-xl font-serif text-maya-sage mb-2">{faq.question}</h3>
                <p className="text-maya-sage/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }