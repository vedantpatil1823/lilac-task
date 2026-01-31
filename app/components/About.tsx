import Image from 'next/image';
import Link from 'next/link';
export default function About() {
  return (
    <section className="px-10 py-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[1/1] overflow-hidden rounded-2xl shadow-lg">
            <Image 
              src="/image.png" 
              alt="Dr. Maya Reynolds - Trauma and Anxiety Therapist in Santa Monica"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Side (Content from Profile) */}
        <div className="flex-1 space-y-6">
          <span className="uppercase tracking-widest text-sm text-maya-earth font-semibold">
            Meet Your Therapist
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-maya-sage leading-tight">
            A warm, collaborative space for high-achieving adults.
          </h2>
          <p className="text-maya-sage/80 text-lg leading-relaxed">
            I specialize in helping individuals in <strong>Santa Monica</strong> and across California navigate the complexities of burnout, trauma, and perfectionism.
          </p>
          <button className="bg-maya-sage text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-maya-earth transition-colors">
            Read My Story
          </button>
        </div>
      </div>
    </section>
  );
}