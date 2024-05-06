import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white max-w-2xl mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Hello, I'm {" "}</span>
            Leonard
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            If I applied to a job and this is the site that appears, please click the download button for my updated CV for more accurate links. My C++ project portfolio PDF can be downloaded with the second button as well. This is a very early release of my portfolio to accomodate any older versions of my CV I've sent. Thank you!
          </p>
        <div>
          <a href="/downloads/nguyenleonard-comp4.pdf">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-black mr-4">
              Projects PDF
            </button>
          </a>
          <a href="/downloads/nguyenleonard-CV.pdf" download="nguyenleonard-CV">
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-black-500 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </a>
        </div>
      </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
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
