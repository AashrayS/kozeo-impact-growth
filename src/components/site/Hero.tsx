const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          {/* Large Stars */}
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-90" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-75" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-85" style={{animationDelay: '2.5s'}}></div>
          
          {/* Medium Stars */}
          <div className="absolute top-32 right-40 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-52 left-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute bottom-32 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-55" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-1/2 left-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-65" style={{animationDelay: '2.3s'}}></div>
          
          {/* Small Stars */}
          <div className="absolute top-24 left-1/2 w-px h-px bg-white opacity-40 animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-48 right-16 w-px h-px bg-white opacity-30 animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-48 left-40 w-px h-px bg-white opacity-45 animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute bottom-24 right-1/2 w-px h-px bg-white opacity-35 animate-pulse" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-2/3 right-8 w-px h-px bg-white opacity-40 animate-pulse" style={{animationDelay: '2.2s'}}></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          <div className="absolute top-1/4 left-0 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" 
               style={{
                 animation: 'slideRight 4s infinite linear',
                 animationDelay: '0s'
               }}></div>
          <div className="absolute top-3/4 right-0 w-0 h-px bg-gradient-to-l from-transparent via-white to-transparent opacity-25" 
               style={{
                 animation: 'slideLeft 5s infinite linear',
                 animationDelay: '2s'
               }}></div>
          
          {/* Diagonal Lines */}
          <div className="absolute top-1/3 left-0 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rotate-12" 
               style={{
                 animation: 'slideRight 6s infinite linear',
                 animationDelay: '1s'
               }}></div>
          <div className="absolute bottom-1/3 right-0 w-0 h-px bg-gradient-to-l from-transparent via-white to-transparent opacity-15 -rotate-12" 
               style={{
                 animation: 'slideLeft 7s infinite linear',
                 animationDelay: '3s'
               }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-end pb-16 px-4 md:pb-24 md:pl-16 lg:pl-24 z-10">
        <div className="max-w-full sm:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-white mb-6 sm:mb-8">
            Ignore The Noise,<br />
            Hire With Purpose
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-full sm:max-w-xl">
            Build your tech portfolio with real-world projects that matter. Every gig on Kozeo contributes to your professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-full">
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
              Start Building Your Profile
            </button>
            <button className="border border-white text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Post a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
