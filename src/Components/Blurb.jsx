export default function Blurb() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 w-full flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-6xl">👩‍💻</span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-800">
          <span className="text-blue-600">Hi, I'm Katie.</span>
        </h1>
        
        {/* Description */}
        <div className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 space-y-4">
          <p>
            I'm a <span className="text-blue-600 font-semibold">full stack developer</span> who loves great design and building 
            clean, user-friendly websites. With a background in video editing, 
            I've developed a strong eye for detail and visual storytelling, 
            which helps me create sites that don't just work well—they look 
            great too.
          </p>
          <p className="font-medium">
            Based in Durham, NC and seeking job opportunities.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/katiegd" 
            target="_blank"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <img
              src="images/github-svgrepo-com.svg"
              alt="Github"
              className="h-6 w-6"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/katiegduryea/" 
            target="_blank"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <img
              src="images/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
