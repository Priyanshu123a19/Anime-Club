import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lighter genre-based background gradients
const genreGradients = {
  action: {
    from: '#fecaca', // red-200
    via: '#e9d5ff', // purple-200
    to: '#f3f4f6',   // gray-100
    accent: '#ef4444' // red-500
  },
  romance: {
    from: '#fbcfe8', // pink-200
    via: '#fce7f3', // rose-200
    to: '#f3e8ff',   // purple-200
    accent: '#ec4899' // pink-500
  },
  fantasy: {
    from: '#c7d2fe', // indigo-200
    via: '#bfdbfe', // blue-200
    to: '#e9d5ff',   // purple-200
    accent: '#8b5cf6' // purple-500
  },
  comedy: {
    from: '#fef3c7', // yellow-200
    via: '#fed7aa', // orange-200
    to: '#fee2e2',   // red-200
    accent: '#f59e0b' // yellow-500
  },
  drama: {
    from: '#bfdbfe', // blue-200
    via: '#c7d2fe', // indigo-200
    to: '#e9d5ff',   // purple-200
    accent: '#3b82f6' // blue-500
  },
  default: {
    from: '#c7d2fe', // indigo-200
    via: '#e9d5ff', // purple-200
    to: '#fbcfe8',   // pink-200
    accent: '#6366f1' // indigo-500
  }
};

// Sample anime news data with genres
const animeNews = [
  {
    title: "Demon Slayer: Infinity Castle Arc",
    excerpt: "The latest arc of Demon Slayer promises to be action-packed and emotionally charged.",
    date: "2025-09-20",
    imageUrl: "https://i.pinimg.com/736x/10/92/ee/1092ee12af8bd90d96fdcf2f2a1528f4.jpg",
    genre: "action"
  },
  {
    title: "Spy x Family Season 2",
    excerpt: "The Forger family returns with more hilarious antics and heartwarming moments.",
    date: "2024-03-17",
    imageUrl: "https://i.pinimg.com/736x/9a/ef/5e/9aef5ec4d047b5fa5e99d89c7332f99d.jpg",
    genre: "comedy"
  }
];

const GenreIndicator = ({ genre, colors }) => {
  const getGenreIcon = () => {
    switch (genre) {
      case 'action':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        );
      case 'romance':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill={colors.accent}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'fantasy':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        );
      case 'comedy':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        );
      case 'drama':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute top-4 right-4"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {getGenreIcon()}
    </motion.div>
  );
};

const GenreBackground = ({ genre, colors }) => {
  const getBackgroundElements = () => {
    switch (genre) {
      case 'action':
        return (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </motion.div>
          </>
        );
      case 'romance':
        return (
          <>
            <motion.div
              className="absolute top-1/3 left-1/3 w-40 h-40 opacity-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <svg viewBox="0 0 24 24" fill={colors.accent}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-32 h-32 opacity-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill={colors.accent}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </>
        );
      case 'fantasy':
        return (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-36 h-36 opacity-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-28 h-28 opacity-10"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
          </>
        );
      case 'comedy':
        return (
          <>
            <motion.div
              className="absolute top-1/3 left-1/3 w-32 h-32 opacity-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </motion.div>
          </>
        );
      case 'drama':
        return (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-36 h-36 opacity-10"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-28 h-28 opacity-10"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </motion.div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getBackgroundElements()}
    </div>
  );
};

const NewsCard = ({ news, isActive, colors }) => (
  <motion.div
    initial={{ opacity: 0, x: 100, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -100, scale: 0.9 }}
    transition={{ 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }}
    className={`group relative ${isActive ? 'block' : 'hidden'}`}
  >
    <div className="relative bg-white/50 backdrop-blur-md rounded-xl overflow-hidden border-2 border-indigo-100/50 hover:border-indigo-200/70 transition-all duration-300 shadow-2xl">
      <GenreIndicator genre={news.genre} colors={colors} />
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
          <motion.img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="md:w-3/5 p-8 flex flex-col justify-between">
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-indigo-900 group-hover:text-indigo-800 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {news.title}
            </motion.h2>
            <motion.p 
              className="text-gray-800 line-clamp-4 mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {news.excerpt}
            </motion.p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-indigo-100/50">
            <motion.span 
              className="text-sm text-indigo-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {news.date}
            </motion.span>
            <motion.span 
              className="text-sm text-indigo-700 font-medium capitalize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {news.genre}
            </motion.span>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-400/70 to-purple-400/70"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
);

const AnimeNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGenre, setCurrentGenre] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState(genreGradients.default);

  // Auto-rotate carousel with smoother transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animeNews.length);
        const nextGenre = animeNews[(currentIndex + 1) % animeNews.length].genre;
        setCurrentGenre(nextGenre);
        setBackgroundColors(genreGradients[nextGenre] || genreGradients.default);
        setIsTransitioning(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div 
      className="min-h-screen text-indigo-900 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${backgroundColors.from}, ${backgroundColors.via}, ${backgroundColors.to})`
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        background: `linear-gradient(to bottom, ${backgroundColors.from}, ${backgroundColors.via}, ${backgroundColors.to})`
      }}
      transition={{ 
        duration: 1.5,
        ease: "easeInOut"
      }}
    >
      <GenreBackground genre={currentGenre} colors={backgroundColors} />
      
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            アニメニュース
          </motion.h1>
          <motion.h2 
            className="text-4xl font-bold text-indigo-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Anime News
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <NewsCard 
              key={currentIndex} 
              news={animeNews[currentIndex]} 
              isActive={true}
              colors={backgroundColors}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeNews; 