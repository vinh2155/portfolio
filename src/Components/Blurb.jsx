import headshotImg from '../assets/images/headshot.png';
import githubIcon from '../assets/images/github-svgrepo-com.svg';
import linkedinIcon from '../assets/images/linkedin-svgrepo-com.svg';

export default function Blurb() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 w-full flex flex-col items-center justify-center h-[calc(100vh-60px)] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
              <img
                src={headshotImg}
                alt="Vinh Huynh"
                className="w-full h-full object-cover"
                style={{ transform: 'translateX(-3px) scale(1.2)' }}
              />
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-6" style={{ fontFamily: 'Gloock, serif' }}>
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(to top right, #271d97ff, #bba3e4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hi, I'm Vinh.
          </span>
        </h1>
        
        {/* Description */}
        <div className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 space-y-4">
          <p>
            I'm a <span className="text-blue-600 font-semibold">full stack developer</span> passionate about great design and building clean, user-friendly websites. Currently, I am building Cirk - the ultimate hub for high school campus life - while studying Software Engineering at <span className="text-blue-600 font-semibold">McGill University</span>. 
          </p>
          <p className="font-medium">
            Based in Montreal, Quebec.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/vinh2155" 
            target="_blank"
            className="p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#321a5aff' }}
          >
            <img
              src={githubIcon}
              alt="Github"
              className="h-8 w-8"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/vinh-huynh-764230293/" 
            target="_blank"
            className="p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#321a5aff' }}
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
