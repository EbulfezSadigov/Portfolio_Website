import React from 'react'
import { motion, useScroll } from 'framer-motion'
const Licon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
  return (
    <figure className='absolute left-0 stroke-black'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
          <circle cx="75" cy="50" r="20" className='stroke-[#0077B6] stroke-1 fill-none'></circle>
          <motion.circle style={{pathLength:scrollYProgress}} cx="75" cy="50" r="20" className='stroke-[5px] fill-white'></motion.circle>
          <circle cx="75" cy="50" r="10" className='stroke-1 fill-[#0077B6] animate-pulse'></circle>
        </svg>
    </figure>
  )
}

export default Licon