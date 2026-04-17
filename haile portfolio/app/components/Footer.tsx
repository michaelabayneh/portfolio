'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900/80 border-t border-gray-800">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Michael Abayneh
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> 
              by Michael Abayneh
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer