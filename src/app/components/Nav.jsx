
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  const [toggel, setToggel] = useState(false);
  const handleMenue = () => {
    setToggel((prev) => !prev);
  };

  return (
    <nav className="container mx-auto p-6 relative">
      <div className=" flex flex-row justify-between items-center">
        <div>
          <Image src="/tailwindLogo.png" alt="error" width={200} height={200} />
        </div>
        <div className="lg:flex space-x-6 items-center hidden">
          <Link className="link-style" href="/">
            Portfolio
          </Link>
          <Link className="link-style" href="/">
            About
          </Link>
          <Link className="link-style" href="/">
            Contact
          </Link>
          <Link className="link-style" href="/">
            Social
          </Link>
          <Link className="button-style" href="/">
            Call Me
          </Link>
        </div>
        <div className="lg:hidden">
          <Bars3Icon onClick={handleMenue} className="size-7 " />
        </div>
      </div>
      {toggel && (
        <div className="lg:hidden bg-gray-50 border border-gray-300 font-bold text-black absolute left-6 right-6 py-8 flex flex-col items-center space-y-4 top-21 drop-shadow-2xl">
          <Link className="link-style" href="/">
            Portfolio
          </Link>
          <Link className="link-style" href="/">
            About
          </Link>
          <Link className="link-style" href="/">
            Contact
          </Link>
          <Link className="link-style" href="/">
            Social
          </Link>
          <Link className="button-style" href="/">
            Call Me
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
