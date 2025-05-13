import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Anime Marathon Night',
    date: '2024-07-10',
    description: 'Join us for a night-long anime marathon featuring classics and new releases. Snacks and drinks provided! Cosplay encouraged.',
    image: '/img/event-marathon.jpg',
  },
  {
    title: 'Manga Drawing Workshop',
    date: '2024-07-18',
    description: 'Learn manga drawing techniques from a guest artist. All skill levels welcome. Materials will be provided.',
    image: '/img/event-manga.jpg',
  },
  {
    title: 'Cosplay Parade',
    date: '2024-07-25',
    description: 'Show off your best cosplay and win exciting prizes! The parade will be followed by a photoshoot and social.',
    image: '/img/event-cosplay.jpg',
  },
  {
    title: 'Anime Quiz Show',
    date: '2024-08-02',
    description: 'Test your anime knowledge in our fun and fast-paced quiz show. Teams and solo participants welcome!',
    image: '/img/event-quiz.jpg',
  },
];

const bgShapes = [
  { size: 120, x: '10%', y: '15%', color: 'from-pink-400 to-purple-500' },
  { size: 90, x: '80%', y: '30%', color: 'from-blue-400 to-indigo-500' },
  { size: 70, x: '30%', y: '70%', color: 'from-yellow-300 to-pink-400' },
  { size: 100, x: '70%', y: '60%', color: 'from-purple-400 to-blue-400' },
];

const FloatingShape = ({ size, x, y, color, delay }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-br ${color} opacity-30`}
    style={{ width: size, height: size, left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.15, 1],
      y: [0, -18, 0],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const UpcomingEventsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200 relative overflow-hidden py-16 px-2">
    {/* Animated background shapes */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {bgShapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} delay={i * 0.7} />
      ))}
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="text-5xl md:text-6xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg special-font"
      >
        UPCOMING EVENTS<br />
        <span className="block text-2xl md:text-3xl font-normal text-blue-400 tracking-widest mt-2">JOIN US FOR EXCITING ANIME EVENTS</span>
      </motion.h1>
      <div className="space-y-10">
        {events.map((event, idx) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, type: 'spring', bounce: 0.3 }}
            className="relative flex flex-col md:flex-row items-center bg-white/80 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-pink-300 transition-all duration-500 group"
            style={{ minHeight: 220 }}
          >
            <div className="md:w-1/3 w-full h-44 md:h-56 overflow-hidden flex-shrink-0">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />
            </div>
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-2 text-pink-600 group-hover:text-blue-600 transition-colors duration-300 special-font"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              >
                {event.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 mb-3 font-general"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                {event.description}
              </motion.p>
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold text-sm tracking-widest shadow-md mt-2 animate-pulse"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
              >
                {event.date}
              </motion.div>
            </div>
            {/* Decorative Japanese text */}
            <motion.div
              className="absolute top-2 right-4 text-5xl font-japanese text-blue-200/40 select-none pointer-events-none hidden md:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
            >
              イベント
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingEventsPage; 