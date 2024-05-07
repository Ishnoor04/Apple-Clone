import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
    useGSAP(()=>{
        gsap.to('.hero-title', {
            opacity:1,
            delay:2
        })
        gsap.to('#cta', {
            opacity:1, y:-150, delay:2
        })
    })
    const [videoSrc, setVideoSrc  ] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = ()=>{
        if(window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }
        else {
            setVideoSrc(heroVideo)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize', handleVideoSrcSet)
        return ()=>{
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
        <div className="h-5/6 w-full flex-center flex-col">
            <p className='hero-title'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12' >
                <video autoPlay muted playsInline={true} key={videoSrc} loop={true} className='pointer-events-none'> <source src={videoSrc} type='video/mp4'/></video>
            </div>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-10'>
            <a href="#highlights" className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $199/Month or $999</p>
        </div>
    </section>
  )
}

export default Hero