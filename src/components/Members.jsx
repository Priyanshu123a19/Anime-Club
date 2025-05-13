import React from 'react';

// Example team data
const teamMembers = [
  {
    name: 'Ananya Rakhi Singh',
    role: 'President',
    image: 'img/Members/zoro.jpg',
    anime: 'Your Name',
  },
  {
    name: 'Shivani Patel',
    role: 'Vice President',
    image: 'img/Members/zoro.jpg',
    anime: 'Demon Slayer',
  },
  {
    name: 'Kaustav Murali Duvvuri',
    role: 'Vice President',
    image: 'img/Members/zoro.jpg',
    anime: 'Attack on Titan',
  },
  {
    name: 'Dr. Amrita Parashar',
    role: 'Faculty Coordinator',
    image: 'img/Members/zoro.jpg',
    anime: 'Jujutsu Kaisen',
  }
];

const bentoColors = [
  'bg-blue-50',
  'bg-blue-75',
  'bg-blue-100',
  'bg-violet-300',
  'bg-yellow-300',
];

const Members = () => {
  return (
    <div className="min-h-screen w-full bg-blue-100 flex flex-col items-center py-12 px-4">
      <h1 className="special-font text-4xl md:text-6xl mb-8 text-violet-300 animate-fade-in">クラブのメンバー</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-bento-fade">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            className={`relative rounded-3xl shadow-xl overflow-hidden p-6 flex flex-col items-center group transition-transform duration-500 hover:scale-105 hover:rotate-1 ${bentoColors[idx % bentoColors.length]} animate-bento-pop`}
            style={{ minHeight: '340px' }}
          >
            <div className="absolute -top-8 right-6 z-10 text-7xl opacity-10 pointer-events-none select-none">
              ✦
            </div>
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full border-4 border-violet-300 shadow-lg mb-4 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <h2 className="font-zentry text-2xl text-blue-200 mb-1 tracking-wide drop-shadow-lg">{member.name}</h2>
            <p className="font-general text-yellow-100 mb-2 text-lg">{member.role}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-violet-300 text-blue-100 font-circular-web text-xs shadow-md animate-bounce-slow">
              Favorite Anime: {member.anime}
            </span>
          </div>
        ))}
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bento-pop {
          0% { transform: scale(0.8) rotate(-2deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-bento-pop {
          animation: bento-pop 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bento-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-bento-fade {
          animation: bento-fade 1.2s 0.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Members; 