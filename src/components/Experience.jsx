import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'SDE Intern, Pinggy',
        period: 'Dec 2024 - Jan 2025',
        description: 'Developed a cross-platform Java SDK for reverse localhost tunneling, integrating Pinggy’s tunneling services via JNI to ensure efficient and seamless functionality. The SDK was designed with modular development using Maven, enhancing maintainability and scalability. Additionally, I optimized the solution for compatibility across multiple operating systems, including Windows, macOS, and Linux, ensuring a consistent and reliable experience for users across different platforms.',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[800px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience