import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const PastEventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const events = [
    {
      id: 1,
      title: "Monarch Treasure Trail",
      japaneseTitle: "モナーク・トレジャー・トレイル 2025",
      image: "/img/Events/Event1.jpg",
      description: "Our biggest event yet, featuring amazing competitions and anime Treasure Hunt",
      japaneseDescription: "これまでで最大のイベント！すごいコンテストやアニメ宝探しが登場！"
    },
    {
      id: 2,
      title: "Monarch Treasure Trail",
      japaneseTitle: "モナーク・トレジャー・トレイル 2025",
      image: "/img/Events/Event2.jpg",
      description: "Our biggest event yet, featuring amazing competitions and anime Treasure Hunt",
      japaneseDescription: "これまでで最大のイベント！すごいコンテストやアニメ宝探しが登場"
    }
  ];

  useGSAP(() => {
    // Page entrance animation
    gsap.fromTo("#past-events-page",
      { 
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Title animation with brush stroke effect
    gsap.fromTo("#page-title",
      { 
        opacity: 0,
        x: -50,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
      },
      { 
        opacity: 1,
        x: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut"
      }
    );

    // Carousel animation
    gsap.fromTo("#carousel-container",
      { 
        opacity: 0,
        scale: 0.8,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
      },
      { 
        opacity: 1,
        scale: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut"
      }
    );

    // Decorative elements animations
    gsap.to(".ink-splash", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2
    });

    gsap.to(".brush-pattern", {
      scale: 1,
      opacity: 0.3,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1
    });

    gsap.to(".japanese-pattern", {
      scale: 1,
      opacity: 0.2,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.15
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="past-events-page" className="w-screen overflow-hidden h-full min-h-screen bg-gradient-to-b from-black via-red-900 to-black py-20 relative">
      {/* Japanese decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ink splashes */}
        <div className="absolute top-20 left-20 w-64 h-64 ink-splash opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20 Z" 
              className="fill-red-600/20" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-20 w-48 h-48 ink-splash opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,40 C120,40 140,60 140,80 C140,100 120,120 100,120 C80,120 60,100 60,80 C60,60 80,40 100,40 Z" 
              className="fill-red-600/20" />
          </svg>
        </div>

        {/* Brush stroke patterns */}
        <div className="absolute top-40 right-40 w-32 h-32 brush-pattern opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,100 Q100,20 180,100 T340,100" 
              className="stroke-red-600/30 stroke-[8] fill-none" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-40 w-40 h-40 brush-pattern opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M40,160 Q100,40 160,160" 
              className="stroke-red-600/30 stroke-[8] fill-none" />
          </svg>
        </div>

        {/* Japanese patterns */}
        <div className="absolute top-10 right-10 w-24 h-24 japanese-pattern opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,20 L180,20 L180,180 L20,180 Z M60,60 L140,60 L140,140 L60,140 Z" 
              className="stroke-red-600/20 stroke-[4] fill-none" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-24 h-24 japanese-pattern opacity-0 scale-75">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,100 L180,100 M100,20 L100,180" 
              className="stroke-red-600/20 stroke-[4] fill-none" />
          </svg>
        </div>
      </div>

      {/* Japanese paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/img/japanese-paper.png')] opacity-10 mix-blend-overlay" />

      <div className="screen-max-width relative z-10">
        <div className="text-center mb-16">
          <h1 id="page-title" className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 mb-4 font-japanese">
            過去のイベント | Past Events
          </h1>
          <p className="text-xl text-red-200 font-japanese">私たちの素晴らしい思い出 | Our Wonderful Memories</p>
        </div>

        <div id="carousel-container" className="relative max-w-6xl mx-auto bg-black/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-red-600/30">
          {/* Carousel */}
          <div ref={carouselRef} className="relative h-[600px] overflow-hidden rounded-2xl">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute w-full h-full transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-shadow font-japanese">
                      {event.japaneseTitle}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-shadow">
                      {event.title}
                    </h3>
                    <p className="text-lg mb-2 text-shadow font-japanese">{event.japaneseDescription}</p>
                    <p className="text-lg text-shadow">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="group w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="w-8 h-8 text-red-500/80 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="group w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="w-8 h-8 text-red-500/80 group-hover:text-red-500 transform group-hover:-translate-x-1 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 scale-125"
                    : "bg-red-500/30 hover:bg-red-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        .font-japanese {
          font-family: 'Noto Sans JP', sans-serif;
        }
        .ink-splash {
          transform-origin: center;
          transition: transform 0.3s ease;
        }
        .brush-pattern {
          transform-origin: center;
          transition: transform 0.3s ease;
        }
        .japanese-pattern {
          transform-origin: center;
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default PastEventsPage; 