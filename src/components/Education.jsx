import { useScroll,motion } from 'framer-motion'
import React, { useRef } from 'react'
import Licon from './Licon'

const Details = ({ position, time, work }) => {
    const ref = useRef()

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
        <Licon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;</h3>
            <span className='capitalize font-medium text-black/75 dark:text-white'>
                {time}
            </span>
            <p className='font-medium w-full dark:text-white'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>

            <div className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY:scrollYProgress}} ref={ref} className='absolute left-9 dark:bg-white top-0 w-[4px] h-full bg-black origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position="Bachelor of science in Computer Science"
                        time="2018 - 2022" work="Learning fundamentals of Computer science"
                    />
                    <Details position="Master of science in Cyber security"
                        time="2022 - 2024" work="Learning fundamentals of Cyber security"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience