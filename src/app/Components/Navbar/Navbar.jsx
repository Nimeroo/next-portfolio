'use client'

import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <nav>
            
                    <Link href="/">Home</Link>
                    <Link href="/Projects">Projects</Link>
                    <Link href="/Blog">Blog</Link>
                
            </nav>
        </header>
    )
}

export default Navbar