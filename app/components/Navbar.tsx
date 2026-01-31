import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-6 bg-[#F3F0EC] text-[#2C2C2C]">
            {/* Logo Area */}
            <div className="text-xl font-serif font-semibold tracking-tight">
                LILAC
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
                <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
                <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
                <Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link>
                <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
            </div>

            {/* Mobile Toggle Placeholder */}
            <div className="md:hidden">
                <button className="p-2">Menu</button>
            </div>
        </nav>
    );
}