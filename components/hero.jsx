"use client";

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {

    const ImageRef = useRef();
    useEffect(() => {
        const ImageElement = ImageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if(scrollPosition > scrollThreshold){
                ImageElement.classList.add('scrolled');
            }
            else {
                ImageElement.classList.remove('scrolled');  
            }
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    }, []);

  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage your Finances <br /> with Intelligence</h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-10'>An AI-powered financial platform that helps you track, analyze, and optimize your money effortlessly. Let AI guide you toward smarter investments and better financial decisions
        </p>
        <div className='flex justify-center space-x-4'>
            <Link href='/dashboard'>
                <Button size='lg' className='px-8'>Get Started</Button>
            </Link>
        </div>
        <div className='hero-image-wrapper'>
        <div ref={ImageRef} className='hero-image'>
            <Image src = "/robot.jpeg" width = {1280} height = {720} alt = "dashboard" priority className='rounded-lg shadow-2xl border mx-auto'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
