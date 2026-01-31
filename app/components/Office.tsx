import Image from 'next/image';

export default function Office() {
  return (
    <section className="px-10 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-maya-sage mb-4">A Calm Space for Healing</h2>
          <p className="text-maya-sage/70 max-w-2xl mx-auto">
            My Santa Monica practice is designed to be a safe, private sanctuary where you can step away from the noise of daily life and focus on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Office Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
              <Image 
                src="/office1.png" 
                alt="Dr. Maya Reynolds Therapy Office - Consultation Space"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src="/office2.png" 
                  alt="Comfortable seating and warm lighting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image 
                  src="/office.png" 
                  alt="Calming office decor and natural elements"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Office Narrative */}
          <div className="space-y-8 md:pl-8">
            <div className="border-l-4 border-maya-earth pl-6">
              <h3 className="text-2xl font-serif text-maya-sage mb-3">In-Person & Hybrid Availability</h3>
              <p className="text-maya-sage/80 leading-relaxed">
                Located conveniently in Santa Monica, my office offers a serene environment for those who prefer the connection of in-person therapy. I also offer a hybrid model to accommodate your schedule across California.
              </p>
            </div>
            
            <div className="bg-maya-bg p-8 rounded-2xl">
              <h4 className="text-sm uppercase tracking-[0.2em] text-maya-earth font-bold mb-4 text-center md:text-left">
                Safety & Privacy
              </h4>
              <ul className="text-maya-sage/70 text-sm space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-maya-earth rounded-full"></span>
                  Soundproof walls for total confidentiality
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-maya-earth rounded-full"></span>
                  Private, comfortable waiting area
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-maya-earth rounded-full"></span>
                  Handicap accessible facility and parking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}