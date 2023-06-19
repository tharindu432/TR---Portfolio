import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <motion.div
      className="background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url('../assets/img/banner-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Your page content goes here */}
    </motion.div>
  )
}

export default Background;