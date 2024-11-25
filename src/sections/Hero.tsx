import Image from 'next/image'
import React from 'react'
import memojiComputer from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import HeroOrbit from '@/components/HeroOrbit'
import SparkIcon from '@/assets/icons/sparkle.svg'

const Hero = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/* Custom plugin was created in tailwind.config.js to be able to use mask-image-gradient-vertical */}
      <div className="absolute inset-0 mask-image-gradient-vertical">
        {/* Background grain */}
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
          }}>
        </div>

        {/* Background rings */}
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        {/* Background stars */}
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='6s'>
          <StarIcon className ="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='6s'>
          <StarIcon className ="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='6s'>
          <StarIcon className ="size-28 text-emerald-300"/>
        </HeroOrbit>

        {/* Background Sparkles */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='10s'>
          <SparkIcon className ="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='10s'>
          <SparkIcon className ="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='10s'>
          <SparkIcon className ="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='10s'>
          <SparkIcon className ="size-14 text-emerald-300/20"/>
        </HeroOrbit>

        {/* Background Circles */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='44s'>
          <div className ="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='46s'>
          <div className ="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='48s'>
          <div className ="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>


      <div className='container'>
        <div className=' flex flex-col items-center'>
          <Image src={memojiComputer} alt='person using laptop' className='size-[100px]'/>
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-400 size-2.5 rounded-full relative'>
              <div className=' absolute inset-0 bg-green-400 size-2.5 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium animate-wiggle'>Avialable for new projects</div>
          </div>
        </div>

        <div className=' max-w-lg mx-auto'>
          <h1 className=' font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'> DDBuilding Exceptional user experinces</h1>
          <p className=' mt-4 text-center text-white/60 md:text-lg'> 
            I specialize in tranforming designs into functional, high performing web apllications.
            Lets discuss your new project.
          </p>
        </div>

        <div className=' flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'> Explore My Work </span>
            <ArrowDown className='size-4'/>
          </button>

          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
            <span>✋</span>
            <span className='font-semibold'> Let&lsquo;s Connect </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
