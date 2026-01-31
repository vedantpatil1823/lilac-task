import Link from 'next/link';
export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-32 px-6">
            {/* Subheading/Category */}
            <span className="uppercase tracking-[0.3em] text-sm mb-6 text-gray-500 font-medium">
                Mental Health Services
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] max-w-4xl leading-[1.1] mb-8">
                Cultivating space for healing and growth.
            </h1>

            {/* Primary CTA Button */}
            <button className="bg-[#2C2C2C] text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-opacity-80 transition-all">
                Book a Consultation
            </button>
        </section>
    );
}