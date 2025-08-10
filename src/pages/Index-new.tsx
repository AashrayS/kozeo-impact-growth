import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

const Index = () => {
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
      <Navbar />
      <main>
        <Hero />

        {/* Testimonial Section */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-6xl text-gray-600 mb-6">"</div>
            <blockquote className="text-4xl md:text-5xl font-normal leading-tight mb-12">
              Other job platforms were like throwing resumes into the void. But my teammate and I connected right away on Kozeo, and the collaboration was effortless. We've been working together for over a year.
            </blockquote>
            <cite className="text-xl text-gray-400 not-italic">
              Alex R.
            </cite>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <p className="text-purple-600 mb-12 text-lg">Our Approach</p>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-6xl md:text-7xl font-normal leading-tight text-black">
                  Go on your <span className="relative">
                    (last)
                    <svg className="absolute -bottom-2 left-0 w-full h-8" viewBox="0 0 200 20">
                      <path d="M5,15 Q100,5 195,15" stroke="#8B5A96" strokeWidth="2" fill="none" />
                    </svg>
                  </span><br />
                  first interview.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kozeo is built on the belief that anyone looking for career growth should be able to find it. It's also built on an acclaimed matching algorithm, so we can succeed in getting you meaningful connections, not keeping you on the app.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  How we do it
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Labs Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://via.placeholder.com/500x600/f0f0f0/333333?text=Research+Team+at+Work" 
                  alt="Kozeo Labs team" 
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <p className="text-purple-600 text-lg">Kozeo Labs</p>
                <h3 className="text-5xl md:text-6xl font-normal leading-tight text-black">
                  We're career scientists.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Kozeo Labs researchers, behavioral analysts, and career matchmakers study professionals and compatibility so we can make Kozeo better for you. We've gotten pretty good at it.
                </p>
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
    </>
  );
};

export default Index;
