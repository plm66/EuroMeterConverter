import ConverterCard from "@/components/converter/ConverterCard";
import InformationSection from "@/components/converter/InformationSection";

export default function Home() {
  return (
    <div className="min-h-screen dubai-background">
      <div className="min-h-screen bg-gradient-to-b from-accent/80 via-primary/60 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="bg-[rgba(15,30,65,0.92)] backdrop-blur-md rounded-xl p-8 shadow-xl border border-secondary/30">
              <h1 className="text-6xl font-extrabold text-secondary mb-5 tracking-tight font-raleway leading-tight">
                Tailored Property<br/>Price Converter
              </h1>
              <div className="h-0.5 w-24 bg-secondary mx-auto my-5"></div>
              <p className="text-lg text-white font-light mb-2 uppercase tracking-widest">
                DUBAI • ABU DHABI • EUROPE • INTERNATIONAL
              </p>
              <p className="text-sm text-white/80 font-raleway">Converting Euros per square meter and UAE Dirhams per square foot</p>
            </div>
          </header>
          
          {/* Converter Card Component */}
          <ConverterCard />
          
          {/* Information Section Component */}
          <InformationSection />
          
          {/* Property Carousel - Sponsor/Developer Showcase */}
          <div className="mt-12 bg-[rgba(29,41,81,0.85)] backdrop-blur-md rounded-xl p-6 shadow-xl text-center text-white border border-secondary/30">
            <h3 className="text-2xl font-semibold mb-4 text-secondary font-playfair">SPONSORED PROPERTIES</h3>
            <div className="h-0.5 w-16 bg-secondary mx-auto mb-6"></div>
            <p className="text-white/80 mb-6">Discover luxury properties from our premium sponsors</p>
            
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
              {/* Property Cards - These would be dynamically generated based on selection */}
              <div className="min-w-[240px] bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg border border-secondary/20">
                <div className="h-36 bg-accent/10 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary/80 text-accent text-xs font-bold px-2 py-1">SPONSORED</div>
                  <p className="text-xs text-white/80">Premium Property</p>
                </div>
                <h4 className="text-lg font-medium mb-1 font-playfair">Palm Jumeirah Villa</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">550 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 12.5M</span>
                </div>
              </div>
              
              <div className="min-w-[240px] bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg border border-secondary/20">
                <div className="h-36 bg-accent/10 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary/80 text-accent text-xs font-bold px-2 py-1">SPONSORED</div>
                  <p className="text-xs text-white/80">Premium Property</p>
                </div>
                <h4 className="text-lg font-medium mb-1 font-playfair">Marina Penthouse</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">320 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 8.2M</span>
                </div>
              </div>
              
              <div className="min-w-[240px] bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg border border-secondary/20">
                <div className="h-36 bg-accent/10 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary/80 text-accent text-xs font-bold px-2 py-1">SPONSORED</div>
                  <p className="text-xs text-white/80">Premium Property</p>
                </div>
                <h4 className="text-lg font-medium mb-1 font-playfair">Burj Khalifa Apartment</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">180 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 5.7M</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="bg-secondary hover:bg-secondary/90 text-accent px-6 py-2 rounded-full shadow-md transition-all font-medium text-sm">
                View All Sponsored Properties
              </button>
            </div>
            
            {/* Sponsors Banner */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Our Premium Sponsors</h4>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="h-12 w-28 bg-white/10 rounded-md flex items-center justify-center text-secondary font-semibold">
                  EMAAR
                </div>
                <div className="h-12 w-28 bg-white/10 rounded-md flex items-center justify-center text-secondary font-semibold">
                  DAMAC
                </div>
                <div className="h-12 w-28 bg-white/10 rounded-md flex items-center justify-center text-secondary font-semibold">
                  NAKHEEL
                </div>
                <div className="h-12 w-28 bg-white/10 rounded-md flex items-center justify-center text-white/60 text-sm">
                  Your Brand Here
                </div>
              </div>
              <p className="text-xs text-white/50 mt-4">Interested in promoting your properties? Contact us for sponsorship opportunities.</p>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-12 text-center text-white/80">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="h-1 w-6 rounded-full bg-white"></span>
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
            </div>
            <p className="text-sm font-light">© {new Date().getFullYear()} Luxury Property Converter | Exchange rates updated daily</p>
            <p className="text-xs mt-2 opacity-70">Where luxury meets precision</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
