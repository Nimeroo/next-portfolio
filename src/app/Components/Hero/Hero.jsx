'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div>
            <h1>Joel Giroux</h1>
            <h3>Creator of things on the net</h3>
            <p> I am a software engineer who specializes in programming automated tools and developing digital creations.</p>
            <Link href="/Projects">View my projects!</Link>
        </div>
    )
}


export default Hero