import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Office from './components/Office'; // New Import
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Office /> {/* Creative Custom Section */}
      <FAQ />
      <footer className="py-12 bg-white text-center text-maya-sage/50 text-[10px] uppercase tracking-[0.2em]">
        © 2026 Dr. Maya Reynolds • Santa Monica • California
      </footer>
    </main>
  );
}