import Link from 'next/link';
import React from 'react'
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className='p-4 items-center justify-between'>
        {/* Left side */}
        collapseButton

        {/* Right side */}
        <div className='flex items-center gap-4'>
            <Link href="/">Dashboard</Link>
            <Moon/>
        </div>
    </nav>
  )
}

export default Navbar;