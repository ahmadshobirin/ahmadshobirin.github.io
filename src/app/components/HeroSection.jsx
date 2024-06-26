"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I'm&apos;
                    </span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        'Shob',
                        1000,
                        'Software Engineer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1> 
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quo ipsam voluptatem cum nobis ducimus quod iure, ipsa unde provident corporis ab debitis? Velit, corporis? Ducimus soluta vitae iste impedit.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Donwload CV
                    </button>
                </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/dev-shob-2.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection