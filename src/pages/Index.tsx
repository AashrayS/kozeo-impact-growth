import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import { Check, X } from "lucide-react";

const features = [
  { label: "Installment-Based Payments", kozeo: true, trad: false },
  { label: "No Upfront Cost for Posters", kozeo: true, trad: false },
  { label: "Profile-First Approach", kozeo: true, trad: false },
  { label: "Proof of work in specific domain", kozeo: true, trad: false },
  { label: "Impact-Based Project Badges (upcoming)", kozeo: true, trad: false },
  { label: "Resume-Enhancing Work", kozeo: true, trad: false },
];

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kozeo',
    url: '/',
    description:
      'Kozeo is a freelancing + profile-building platform for developers, designers, and data scientists to grow through impact-driven paid work.',
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="container py-16 sm:py-24" id="approach">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-primary mb-2">Our Approach</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
                Profile over payment. Every gig grows your portfolio.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-lg">
              Kozeo is built on the belief that anyone looking for real tech
              experience should be able to find it. We use a profile-first model
              and reputable projects so your work becomes proof—shaping your
              long-term trajectory, not just your next payout.
            </p>
          </div>
        </section>

        <section className="bg-card/60 border-t border-b">
          <div className="container py-16 sm:py-24">
            <p className="text-sm font-medium text-primary mb-3">What makes Kozeo unique</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Feature comparison</h2>
            <div className="overflow-hidden rounded-lg border bg-background shadow-elevated">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="hidden md:block md:col-span-6 px-6 py-4 font-medium text-muted-foreground">Feature</div>
                <div className="hidden md:block md:col-span-3 px-6 py-4 font-medium">Kozeo</div>
                <div className="hidden md:block md:col-span-3 px-6 py-4 font-medium">Traditional</div>
                {features.map((f) => (
                  <div key={f.label} className="contents">
                    <div className="md:col-span-6 px-6 py-4 border-t">{f.label}</div>
                    <div className="md:col-span-3 px-6 py-4 border-t">
                      {f.kozeo ? (
                        <span className="inline-flex items-center gap-2 text-primary"><Check /> <span className="sr-only">Yes</span></span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-muted-foreground"><X /> <span className="sr-only">No</span></span>
                      )}
                    </div>
                    <div className="md:col-span-3 px-6 py-4 border-t">
                      {f.trad ? (
                        <span className="inline-flex items-center gap-2 text-primary"><Check /> <span className="sr-only">Yes</span></span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-muted-foreground"><X /> <span className="sr-only">No</span></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-24" id="benefits">
          <p className="text-sm font-medium text-primary mb-3">Business Benefits</p>
          <div className="grid md:grid-cols-2 gap-10">
            <article>
              <h3 className="font-display text-2xl mb-3">High retention and community loyalty</h3>
              <p className="text-muted-foreground">
                By building long-term developer identities, Kozeo creates a sticky
                user base. Talent keeps returning for credibility as much as cash.
                Peer visibility and achievement-based rankings foster ongoing
                engagement.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl mb-3">Multi-sided revenue model</h3>
              <p className="text-muted-foreground">
                Subscriptions for posters and talent, plus sustainable commissions
                on completed tasks. Premium tiers include certifications and
                profile boosts for accelerated growth.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl mb-3">Scalable user-generated content</h3>
              <p className="text-muted-foreground">
                Every finished project strengthens public profiles and portfolios,
                creating a credibility loop that markets Kozeo organically.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl mb-3">Targeted institutional partnerships</h3>
              <p className="text-muted-foreground">
                Collaborations with colleges, bootcamps, and incubators widen the
                talent pool and diversify the project base—unlocking B2B2C growth.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="container">
            <p className="text-sm font-medium mb-4">What our users say</p>
            <blockquote className="max-w-4xl text-balance">
              <p className="font-display text-3xl sm:text-4xl leading-tight">
                “Other platforms felt like endless gigs with little progress. On
                Kozeo, the work is meaningful and the profile I’m building is
                opening doors. We’ve been collaborating for over a year.”
              </p>
              <footer className="mt-6 text-sm">— Jake C.</footer>
            </blockquote>
          </div>
        </section>

        <section className="container py-16 sm:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl mb-2">For the Tech Community</h3>
              <p className="text-muted-foreground">A frictionless bridge between learning and earning.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">For Businesses & NGOs</h3>
              <p className="text-muted-foreground">Access passionate, affordable tech teams and provable domain skills—fast.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">For the Ecosystem</h3>
              <p className="text-muted-foreground">Every gig builds something real—a feature, a prototype, a change.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Kozeo</span>
          <a href="#approach" className="hover:underline">Back to top</a>
        </div>
      </footer>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </>
  );
};

export default Index;
