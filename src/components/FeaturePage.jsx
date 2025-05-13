import React from 'react';
import { useParams } from 'react-router-dom';
import { BentoCard } from './Features';

// Feature data with different numbers of cards for each feature
const featureData = {
  '1': { // Event Management
    title: 'Event Management',
    japaneseTitle: 'イベント管理',
    romaji: 'Ibento Kanri',
    description: 'Plan and organize amazing anime events',
    cards: [
      { title: 'Shivansh Sharma', description: "Event Lead", image: '/img/Members/luffy.jpg' },
      { title: 'Manya Khandelwal', description: 'Plan and host cosplay competitions', image: '/img/Members/luffy.jpg' },
      { title: 'Priyanshu Yadav', description: 'Conduct anime-related workshops', image: '/img/Members/luffy.jpg' },
      { title: 'Kartikesh Singh', description: 'Organize anime game tournaments', image: '/img/Members/luffy.jpg' },
      { title: 'Niharika Chauhan', description: 'Arrange talks by industry professionals', image: '/img/Members/luffy.jpg' },
      { title: 'Manisha Singh', description: 'Curate anime art exhibitions', image: '/img/Members/luffy.jpg' },
      { title: 'Aanya Sharma', description: 'Organize Japanese cultural events', image: '/img/Members/luffy.jpg' },
      { title: 'Vraj Patel', description: 'Coordinate with other clubs and organizations', image: '/img/Members/luffy.jpg' },
      { title: 'Anju Kumari', description: 'Manage club merchandise and sales', image: '/img/Members/luffy.jpg' },
      { title: 'Suriti Joshi', description: 'Promote events on social platforms', image: '/img/Members/luffy.jpg' },
      { title: 'Kaulik Chakraborty', description: 'Coordinate event volunteers', image: '/img/Members/luffy.jpg' },
      { title: 'yash Saini', description: 'Manage event budgets and resources', image: '/img/Members/luffy.jpg' },
      { title: 'Ekansh K Anjan', description: 'Handle venue bookings and setup', image: '/img/Members/luffy.jpg' }
    ]
  },
  '2': { // Design & Video Editing
    title: 'Design & Video Editing',
    japaneseTitle: 'デザインと動画編集',
    romaji: 'Dezain to Dōga Henshū',
    description: 'Create stunning visual content and videos',
    cards: [
      { title: 'Shivani Patel', description: 'Design and Video Editing lead', image: '/img/Members/bakugo.jpg' },
      { title: 'Rishita Prajapati', description: 'Produce anime-related video content', image: '/img/Members/bakugo.jpg' },
      { title: 'Archi Israni', description: 'Create animated graphics and effects', image: '/img/Members/bakugo.jpg' },
      { title: 'Ruchika Lodhi', description: 'Design 3D models and animations', image: '/img/Members/bakugo.jpg' },
      { title: 'Sanskriti Singh', description: 'Create and edit audio content', image: '/img/Members/bakugo.jpg' },
      { title: 'Mayur Parmar', description: 'Add special effects to videos', image: '/img/Members/bakugo.jpg' },
      { title: 'Navneet Prashar', description: 'Enhance video colors and mood', image: '/img/Members/bakugo.jpg' },
      { title: 'Ayush Pandey', description: 'Plan and visualize video sequences', image: '/img/Members/bakugo.jpg' }
    ]
  },
  '3': { // Content
    title: 'Content',
    japaneseTitle: 'コンテンツ',
    romaji: 'Kontentsu',
    description: 'Create and share your anime-inspired content',
    cards: [
      { title: 'Arghya Chakraborty', description: 'Share your anime reviews and analysis', image: '/img/Members/saitama.gif' },
      { title: 'Bikshipt Khuntia', description: 'Showcase your anime-inspired artwork', image: '/img/Members/saitama.gif' },
      { title: 'Apratim Rashmi', description: 'Create anime-related video content', image: '/img/Members/saitama.gif' }
    ]
  },
  '4': { // Photography
    title: 'Photography',
    japaneseTitle: '写真撮影',
    romaji: 'Shashin Satsuei',
    description: 'Capture and share anime-inspired photography',
    cards: [
      { title: 'Lakshya Peswani', description: 'Document our cosplay events and photoshoots', image: '/img/Members/ichigo.jpg' },
      { title: 'Shresth Bhargava', description: 'Capture memorable moments from our events', image: '/img/Members/ichigo.jpg' },
      { title: 'Kondami Harshith Goud', description: 'Build your photography portfolio', image: '/img/Members/ichigo.jpg' },
      { title: 'Nitu', description: 'Learn and practice photo editing techniques', image: '/img/Members/ichigo.jpg' }
    ]
  },
  '5': { // Social Media
    title: 'Social Media',
    japaneseTitle: 'ソーシャルメディア',
    romaji: 'Sōsharu Media',
    description: 'Connect and engage with our vibrant anime community',
    cards: [
      { title: 'Shourab', description: 'Join our active Discord server for daily discussions and events', image: '/img/Members/naruto.jpeg' },
      { title: 'Suhani Malanib', description: 'Follow us for daily anime content and event highlights', image: '/img/Members/naruto.jpeg' },
      { title: 'Devesh Jha', description: 'Stay updated with the latest anime news and club announcements', image: '/img/Members/naruto.jpeg' }
    ]
  },
  '6': { // Web Development - Steins;Gate Theme
    title: 'Web Development',
    japaneseTitle: 'ウェブ開発',
    romaji: 'Webu Kaihatsu',
    description: 'Build and contribute to our anime club website',
    cards: [
      { title: 'Ananya Rakhi Singh', description: 'Work on the user interface and animations', image: '/img/Members/goku.jpg' },
      { title: 'K.Premchand', description: 'Develop server-side features and APIs', image: '/img/Members/goku.jpg' },
      { title: 'Deeksha Kushwaha', description: 'Handle data storage and retrieval', image: '/img/Members/goku.jpg' },
      { title: 'Om Shelke', description: 'Create beautiful and intuitive interfaces', image: '/img/Members/goku.jpg' }
    ]
  }
};

// Theme configurations for each feature
const featureThemes = {
  '1': { // Event Management - Sakura Theme
    cardBg: 'bg-gradient-to-br from-pink-100 to-rose-200',
    borderColor: 'border-rose-300',
    hoverBorderColor: 'border-pink-400',
    textColor: 'text-rose-600',
    hoverTextColor: 'text-pink-500',
    pattern: 'before:content-["🌸"]',
    accentColor: 'bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400',
    iconColor: 'text-rose-400'
  },
  '2': { // Design & Video Editing - Cyberpunk Theme
    cardBg: 'bg-gradient-to-br from-blue-900 to-purple-900',
    borderColor: 'border-cyan-400',
    hoverBorderColor: 'border-purple-400',
    textColor: 'text-cyan-300',
    hoverTextColor: 'text-purple-300',
    pattern: 'before:content-["⚡"]',
    accentColor: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400',
    iconColor: 'text-cyan-400'
  },
  '3': { // Content - Studio Ghibli Theme
    cardBg: 'bg-gradient-to-br from-emerald-100 to-teal-200',
    borderColor: 'border-emerald-400',
    hoverBorderColor: 'border-teal-400',
    textColor: 'text-emerald-700',
    hoverTextColor: 'text-teal-600',
    pattern: 'before:content-["🌿"]',
    accentColor: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400',
    iconColor: 'text-emerald-400'
  },
  '4': { // Photography - Your Name Theme
    cardBg: 'bg-gradient-to-br from-sky-100 to-indigo-200',
    borderColor: 'border-sky-400',
    hoverBorderColor: 'border-indigo-400',
    textColor: 'text-sky-700',
    hoverTextColor: 'text-indigo-600',
    pattern: 'before:content-["📸"]',
    accentColor: 'bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400',
    iconColor: 'text-sky-400'
  },
  '5': { // Social Media - Demon Slayer Theme
    cardBg: 'bg-gradient-to-br from-red-100 to-orange-200',
    borderColor: 'border-red-400',
    hoverBorderColor: 'border-orange-400',
    textColor: 'text-red-700',
    hoverTextColor: 'text-orange-600',
    pattern: 'before:content-["🔥"]',
    accentColor: 'bg-gradient-to-r from-red-400 via-orange-400 to-red-400',
    iconColor: 'text-red-400'
  },
  '6': { // Web Development - Steins;Gate Theme
    cardBg: 'bg-gradient-to-br from-purple-100 to-blue-200',
    borderColor: 'border-purple-400',
    hoverBorderColor: 'border-blue-400',
    textColor: 'text-purple-700',
    hoverTextColor: 'text-blue-600',
    pattern: 'before:content-["⌛"]',
    accentColor: 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400',
    iconColor: 'text-purple-400'
  }
};

const FeaturePage = () => {
  const { id } = useParams();
  const feature = featureData[id];
  const theme = featureThemes[id];

  if (!feature) {
    return <div className="min-h-screen w-full bg-white flex flex-col items-center py-12 px-4">Feature not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-12 px-4">
      <h1 className="special-font text-4xl md:text-6xl mb-2 text-gray-800 animate-fade-in">{feature.title}</h1>
      <div className="flex flex-col items-center mb-4">
        <h2 className="font-japanese text-3xl md:text-4xl text-gray-700 animate-fade-in">{feature.japaneseTitle}</h2>
        <p className="text-sm text-gray-500 mt-1">{feature.romaji}</p>
      </div>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">{feature.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl animate-bento-fade">
        {feature.cards.map((card, idx) => (
          <div
            key={card.title}
            className={`relative rounded-3xl shadow-xl overflow-hidden p-6 flex flex-col items-center group transition-all duration-500 hover:scale-105 hover:rotate-1 ${theme.cardBg} ${theme.pattern} before:absolute before:top-0 before:right-0 before:text-7xl before:opacity-10 before:pointer-events-none before:select-none animate-bento-pop`}
            style={{ 
              minHeight: '340px',
              '--index': idx,
              '--tw-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
            <img
              src={card.image}
              alt={card.title}
              className={`w-28 h-28 rounded-full border-4 ${theme.borderColor} shadow-lg mb-4 object-cover group-hover:scale-110 transition-transform duration-500 group-hover:${theme.hoverBorderColor}`}
            />
            <h2 className={`font-zentry text-2xl ${theme.textColor} mb-1 tracking-wide drop-shadow-lg group-hover:${theme.hoverTextColor} transition-colors duration-500`}>{card.title}</h2>
            <p className={`font-general ${theme.textColor} mb-2 text-lg text-center group-hover:${theme.hoverTextColor} transition-colors duration-500`}>{card.description}</p>
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${theme.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
          animation-delay: calc(var(--index) * 0.1s);
        }
        @keyframes bento-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-bento-fade {
          animation: bento-fade 1.2s 0.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default FeaturePage; 