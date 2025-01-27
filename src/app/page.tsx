'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./images/30TOL logo.png";
import cap from './images/Bottle-Cap.png';
import bottel_down from './images/Bottle-down.png';
import FeaturesPage from "./features";
import Grid from "./grid"



export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showText, setShowText] = useState(false); // Track when to show the text

  useEffect(() => {
    // Automatically animate the progress
    const animationInterval = setInterval(() => {
      setScrollProgress((prev) => {
        const newProgress = Math.min(prev + 1, 100); // Increment progress
        if (newProgress === 100) clearInterval(animationInterval); // Stop when reaching 100
        return newProgress;
      });
    }, 30); // Adjust speed of animation

    return () => clearInterval(animationInterval);
  }, []);

  // Update text visibility based on scroll progress
  useEffect(() => {
    if (scrollProgress > 50) {
      setShowText(true); // Show text after 50% progress
    } else {
      setShowText(false); // Hide text if progress is less than 50%
    }
  }, [scrollProgress]);

  // Dynamically calculate sizes and positions based on progress
  const circleSize = 250 + scrollProgress * 2; // Circle grows with progress
  const capPosition = 50 - scrollProgress * 0.27; // Cap moves upward with progress
  const basePosition = 70 + scrollProgress * 0.17; // Bottle base moves downward with progress

  return (
    <>
    <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            <Image src={logo} alt="logo" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/shop" className="text-gray-900 hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
              Contact us
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/journal" className="text-gray-900 hover:text-gray-600 transition-colors">
              Journal
            </Link>
            <Link href="/custom" className="text-gray-900 hover:text-gray-600 transition-colors">
              Custom
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/inquiry"
            className="bg-[#00D1FF] text-white px-6 py-2 rounded-full hover:bg-[#00B8E6] transition-colors"
          >
            Inquiry Now
          </Link>
        </div>
      </header>

      {/* Bottle Interaction Section */}
      <main className="relative w-full max-w-5xl h-screen flex items-center justify-center">
        <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
          {/* Dynamic Gradient Circle */}
          <div
            className="absolute transition-all ease-out duration-300"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#7FF8FF] via-[#00D1FF] to-[#0066FF] opacity-80"></div>
            <div className="absolute inset-[3px] rounded-full bg-white"></div>
          </div>

          {/* Bottle Cap */}
          <div
            className="absolute z-20 transition-all ease-out duration-300"
            style={{
              top: `${capPosition}%`,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={cap}
              alt="Bottle Cap"
              width={100}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          {/* Bottle Base */}
          <div
            className="absolute z-10 transition-all ease-out duration-300"
            style={{
              top: `${basePosition}%`,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={bottel_down}
              alt="Bottle Base"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          {/* Text with Zoom-in/Zoom-out effect */}
          {showText && (
            <div className="absolute z-15 text-center text-gray-700 w-full transition-all duration-1000 ease-in-out opacity-100 transform scale-100 delay-500">
              <h2 className="text-[70px] font-bold">The Ultimate Companion For Hydration</h2>
              <p className="text-gray-700 font-medium mt-2 mb-6">
                We believe in the power of hydration.<br />
                Our mission is simple yet vital.
              </p>
              <Link
                href="/inquiry"
                className="bg-[#6c79ec] text-white px-6 py-2 rounded-full hover:bg-[#405dd1] transition-colors"
              >
                Inquiry Now
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
    <div>
      <FeaturesPage/>
      <Grid/>
    </div>
    </>
    
  );
}

