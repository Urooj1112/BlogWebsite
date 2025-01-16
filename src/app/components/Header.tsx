// components/Header.js
import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-whitetext-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Readit */}
        <div className="text-2xl font-bold text-black">
          Read<span className="text-yellow-400">it.</span>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex space-x-6 sm:gap-2 ">

          <Link href="/" className="text-gray-600 hover:text-yellow-400">Home</Link>

          <Link href="\About" className="text-gray-600 hover:text-yellow-400">About</Link>

          <Link href="\BlogPage" className="text-gray-600 hover:text-yellow-400">Blog</Link>

          <Link href="\Contact" className="text-gray-600 hover:text-yellow-400 ">Contact</Link>

        </nav>
      </div>
    </header>
  );
}
