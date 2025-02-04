"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className='relative z-10 w-full bg-orange-500 text-white'>
      <div className='flex justify-between mx-5 sm:mx-10 lg:mx-20 items-center'>
        <div className='flex text-2xl h-14 items-center'>
          <Link href='/'>Logo</Link>
        </div>
        <div className='text-2xl sm:hidden'>
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}>-</button>
          )}
        </div>
        <div className='hidden sm:block'>
          <NavItem currentUser={currentUser} />
        </div>
      </div>
      <div className='block sm:hidden'>
        {menu === false ? null : <NavItem mobile currentUser={currentUser} />}
        {/*  mobile props는 분기처리를 위해 */}
      </div>
    </nav>
  );
};

export default Navbar;
