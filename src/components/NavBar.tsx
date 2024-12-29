import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <header className="test-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="font-bold text-2xl">
          <h1 className="text-slate-800">
            Arishay<span className="text-cyan-900">Blog</span>
          </h1>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-slate-900 justify-center">
          <Link
            href={"/"}
            className="mr-5 hover:text-cyan-800 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href={"/posts/6"}
            className="mr-5 hover:text-cyan-800 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href={"/posts"}
            className="mr-5 hover:text-cyan-800 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            href={"/posts/3"}
            className="mr-5 hover:text-cyan-800 transition-colors duration-300 transform hover:scale-105"
          >
            ContactUs
          </Link>
        </nav>

        <button className="inline-flex items-center bg-slate-800 border-0 py-1 px-4 focus:outline-none hover:bg-cyan-800 rounded text-white mt-4  md:mt-0 transition-colors duration-300">
        <Link href={'/posts'}>See Blogs</Link>

        </button>
      </div>
    </header>
  );
}


