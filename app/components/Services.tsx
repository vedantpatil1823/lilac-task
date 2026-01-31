import Link from 'next/link';
export default function Services() {
    const services = [
      {
        title: "Trauma & EMDR Therapy",
        description: "Specialized support for high-achieving adults processing past trauma and finding safety in the present.",
        keyword: "Trauma specialist Santa Monica"
      },
      {
        title: "Anxiety & Burnout",
        description: "Practical strategies to manage perfectionism and reclaim your energy from the cycle of chronic stress.",
        keyword: "Anxiety therapy California"
      },
      {
        title: "Identity & Relationships",
        description: "Navigate life transitions and the unique pressures of modern adulthood with clarity and confidence.",
        keyword: "Therapy for burnout"
      }
    ];
  
    return (
      <section className="px-10 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-maya-sage mb-4">How I Support You</h2>
          <p className="text-maya-sage/70 max-w-xl mx-auto">Evidence-based approaches tailored to your unique journey toward healing and growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-maya-bg rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif text-maya-sage mb-4">{service.title}</h3>
              <p className="text-maya-sage/80 mb-6 flex-grow">{service.description}</p>
              <span className="text-[10px] uppercase tracking-widest text-maya-earth opacity-50">{service.keyword}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }