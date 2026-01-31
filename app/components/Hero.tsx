import Link from 'next/link';
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-maya-bg">
        {/* Small pre-header for location awareness */}
        <span className="uppercase tracking-[0.3em] text-sm mb-6 text-maya-earth font-medium">
          Santa Monica, CA • Telehealth Available
        </span>
  
        {/* Main SEO Title (H1) with Santa Monica Highlighted */}
        <h1 className="text-5xl md:text-7xl font-serif text-maya-sage max-w-4xl leading-[1.1] mb-8">
          Compassionate Trauma & Anxiety Therapy in <span className="text-maya-earth">Santa Monica</span>
        </h1>
  
        <p className="text-lg text-maya-sage/80 max-w-2xl mb-10 font-sans">
          Helping high-achieving adults navigate burnout and perfectionism through collaborative, trauma-informed care.
        </p>
  
        {/* Clear Call to Action */}
        <button className="bg-maya-earth text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all shadow-sm">
          Schedule a Free Consultation
        </button>
      </section>
    );
  }