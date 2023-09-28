import { useScroll,motion } from 'framer-motion'
import React, { useRef } from 'react'
import Licon from './Licon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef()

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Licon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a className='text-[#0077B6]' href={companyLink}>@company</a></h3>
            <span className='capitalize font-medium text-black/75 dark:text-white'>
                {time}
            </span>
            <p className='font-medium w-full'>
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
                Experience
            </h2>

            <div className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY:scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position="Software Programming Instructor" company="Code Academy" companyLink="code.edu.az"
                        time="2023 Februrary-Present" work="Teaching programming in one of the largest secondary education centers of country. Education syllabus of the course contains React,NextJs, HTML/CSS/JS, MongoDB etc. Have collabrated with Baku State University and Azerbaijan Technical University practicing CS 101+ to senior year computer science students."
                    />
                    <Details position="Full-Stack Developer" company="Maestro Studio" companyLink="maestro.st"
                        time="2023 January-Present" work="Designed and developed efficient and maintainable
                        software according to business objectives and needs of
                        various clients.Maintained complex technology infrastructure and
                        collaborated with product team to implement new features
                        and strategically plan for future products.Used Javascript frameworks (VueJS,Nuxt), Tailwind CSS and other tools to
                        develop app-solutions. "
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience