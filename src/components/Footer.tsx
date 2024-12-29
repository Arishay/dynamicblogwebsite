import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-slate-200 text-slate-900 p-4  ">
      {" "}
      <hr className="h-1 bg-slate-900" />{" "}
      <div className="container mx-auto text-center pt-6">
        {" "}
        <p>© 2024 ArishaBlog. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          {" "}
          <Link href={"/"} className="hover:text-cyan-800">
            {" "}
            Home{" "}
          </Link>
          <Link href={"/posts/6"} className="hover:text-cyan-800">
            {" "}
            About{" "}
          </Link>
          <Link href={"/posts"} className="hover:text-cyan-800">
            {" "}
            Blog{" "}
          </Link>
          <Link href={"/posts/3"} className="hover:text-cyan-800">
            {" "}
            Contact{" "}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
