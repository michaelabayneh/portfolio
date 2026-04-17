'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Coffee, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'Woldia University' },
    { icon: Code, label: 'Specialization', value: 'Full Stack Development' },
    { icon: Coffee, label: 'Experience', value: 'Modern Web Technologies' },
    { icon: Lightbulb, label: 'Focus', value: 'Innovation & Quality' },
  ]

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full stack developer with a strong foundation in computer science 
            and a love for creating innovative web solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I graduated from Woldia University with a strong foundation in computer science 
              and software engineering principles. My passion for web development led me to 
              specialize in full stack development, where I combine creativity with technical 
              expertise to build exceptional digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly learning and adapting to new technologies, with a particular 
              focus on modern frameworks like React, Next.js, and Node.js. I believe in 
              writing clean, maintainable code and creating user-centered applications 
              that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-300">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About