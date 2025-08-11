import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Loader from "@/components/site/Loader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { isVisible } = useScrollAnimation();

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kozeo',
    url: '/',
    description:
      'Kozeo is a professional networking platform designed to help you build meaningful career connections.',
  };

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      
      <div className={`transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <div 
            id="hero-section"
            data-scroll-animation
            className={`transition-all duration-1000 ease-out ${
              isVisible('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Hero />
          </div>

          {/* Value Proposition Section */}
          <section 
            id="value-section"
            data-scroll-animation
            className={`py-12 sm:py-16 md:py-24 bg-white transition-all duration-1000 ease-out ${
              isVisible('value-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black mb-4 sm:mb-6 md:mb-8">
                  Profile &gt; Payment
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Kozeo transforms gig culture into career growth. Unlike traditional platforms that focus only on task completion, every project on Kozeo contributes to your tech portfolio and professional identity.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-20">
                <div className="text-center px-2 py-4">
                  <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Profile-First Approach</h3>
                  <p className="text-gray-600">Every gig builds your credible tech portfolio with real-world projects from startups and NGOs.</p>
                </div>
                
                <div className="text-center px-2 py-4">
                  <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Resume-Enhancing Work</h3>
                  <p className="text-gray-600">Collaborative projects that develop communication, leadership, and technical skills employers value.</p>
                </div>
                
                <div className="text-center px-2 py-4">
                  <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Impact-Driven Projects</h3>
                  <p className="text-gray-600">Work on meaningful projects that create real value while building proof of your domain expertise.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section 
            id="cta-section"
            data-scroll-animation
            className={`bg-black text-white py-12 sm:py-16 md:py-24 transition-all duration-1000 ease-out ${
              isVisible('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} 
            data-section="testimonial"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 sm:mb-6 md:mb-8">
                Ready to build your<br />tech portfolio?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
                Join the movement that's making freelancing purposeful and profile development structured.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
                <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:bg-gray-100 transition-colors w-fit">
                  Start Building Your Profile
                </button>
                <button className="border border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:bg-white hover:text-black transition-colors w-fit">
                  Post a Project
                </button>
              </div>
            </div>
          </section>

          {/* Features Comparison */}
          <section 
            id="features-section"
            data-scroll-animation
            className={`py-24 bg-gray-50 transition-all duration-1000 ease-out ${
              isVisible('features-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-normal leading-tight text-black mb-8">
                  Why choose Kozeo?
                </h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="p-6 font-semibold text-gray-500 bg-gray-50">Feature</div>
                  <div className="p-6 font-semibold text-center bg-black text-white">Kozeo</div>
                  <div className="p-6 font-semibold text-center">Traditional Platforms</div>
                  
                  <div className="p-6 border-t">Profile-First Approach</div>
                  <div className="p-6 border-t text-center bg-green-50 text-green-600 font-medium">✓</div>
                  <div className="p-6 border-t text-center text-red-500">✗</div>
                  
                  <div className="p-6 border-t">Resume-Enhancing Work</div>
                  <div className="p-6 border-t text-center bg-green-50 text-green-600 font-medium">✓</div>
                  <div className="p-6 border-t text-center text-red-500">✗</div>
                  
                  <div className="p-6 border-t">No Upfront Cost for Posters</div>
                  <div className="p-6 border-t text-center bg-green-50 text-green-600 font-medium">✓</div>
                  <div className="p-6 border-t text-center text-red-500">✗</div>
                  
                  <div className="p-6 border-t">Proof of Domain Expertise</div>
                  <div className="p-6 border-t text-center bg-green-50 text-green-600 font-medium">✓</div>
                  <div className="p-6 border-t text-center text-red-500">✗</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t">
          <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
            <span>© {new Date().getFullYear()} Kozeo</span>
            <a href="#" className="hover:underline">Back to top</a>
          </div>
        </footer>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </div>
    </>
  );
};

export default Index;
