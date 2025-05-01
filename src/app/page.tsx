"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="relative bg-black text-white min-h-screen font-sans">
<div 
  className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0"
  style={{ backgroundImage: "url('https://media.giphy.com/media/qn5EVBGcFfU9u/giphy.gif')" }}
></div>

      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Tera Smart
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Kỷ nguyên công nghệ - biến mọi thiết bị của bạn trở nên tiện ích
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition"
        >
          Try It Now
        </motion.button>
      </section>

      <section className="relative z-10 bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {['Natural Voice', 'Real-time Response', 'Cloud Based'].map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-400">Experience smooth, responsive AI interactions that feel like talking to a real human.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
