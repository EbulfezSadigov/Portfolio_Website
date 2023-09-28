"use client"
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ProfilePic from '../../../public/port.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value})=>{
  const ref= useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue,{duration:3000})
  const isInView = useInView(ref,{once:true})
  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  }, [isInView,value,motionValue])
  
  useEffect(() => {
    springValue.on('change',(latest)=>{
      if(ref.current&&latest.toFixed(0)<=value){
        ref.current.textContent=latest.toFixed(0)
      }
    })
  }, [springValue,value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center py-10 dark:text-white'>
        <div className='mx-auto pt-0 sm:px-6 lg:px-8 px-4 max-w-[1400px]'>
          <AnimatedText text="Passion fuels purpose" className='mb-10 dark:text-white' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I'm Sadigov Ebulfez, a web developer with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 1.5 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className='font-medium my-4'>I believe that design is about more than just making things look pretty – it's about solving problems and
                creating intuitive, enjoyable experiences for users. </p>
              <p className='font-medium'>Whether I'm working on a website,I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            </div>
            <div className='col-span-3 relative dark:bg-black dark:border-white h-max rounded-2xl border-2 border-solid border-black bg-white p-8'>
              <div className='absolute top-0 -right-3 -z-10 dark:bg-white w-[102%] h-[103%] rounded-2xl bg-black' />
                <Image priority src={ProfilePic} alt='CodeBucks' className='w-full h-auto rounded-2xl ' />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={50}/>+</span>
                <h2 className='text-xl font-medium capitalize text-black/75 dark:text-white'>Satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={10}/>+</span>
                <h2 className='text-xl font-medium capitalize text-black/75 dark:text-white'>Projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={2}/>+</span>
                <h2 className='text-xl font-medium capitalize text-black/75 dark:text-white'>Years experienced</h2>
              </div>
            </div>
          </div>
          <Experience/>
          <Education/>
        </div>
      </main>
    </>
  )
}

export default About