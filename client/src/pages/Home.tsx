import ConverterCard from "@/components/converter/ConverterCard";
import InformationSection from "@/components/converter/InformationSection";

export default function Home() {
  return (
    <div className="min-h-screen dubai-background">
      <div className="min-h-screen bg-gradient-to-b from-accent/80 via-primary/60 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl">
              <h1 className="text-5xl font-bold luxury-gradient mb-4 tracking-tight">
                LUXURY PROPERTY PRICE CONVERTER
              </h1>
              <div className="h-0.5 w-24 bg-secondary mx-auto my-4"></div>
              <p className="text-lg text-white font-light mb-1">
                DUBAI • ABU DHABI • EUROPE • INTERNATIONAL
              </p>
              <p className="text-sm text-white/80">Converting Euros per square meter and UAE Dirhams per square foot</p>
            </div>
          </header>
          
          {/* Converter Card Component */}
          <ConverterCard />
          
          {/* Information Section Component */}
          <InformationSection />
          
          {/* Property Carousel Placeholder - To Be Implemented */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Featured Properties</h3>
            <div className="h-0.5 w-16 bg-secondary mx-auto mb-6"></div>
            <p className="text-white/80 mb-6">Discover stunning properties in the most prestigious locations</p>
            
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
              {/* Property Cards - These would be dynamically generated based on selection */}
              <div className="min-w-[240px] bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="h-36 bg-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <p className="text-xs text-white/80">Property Image</p>
                </div>
                <h4 className="text-lg font-medium mb-1">Palm Jumeirah Villa</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">550 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 12.5M</span>
                </div>
              </div>
              
              <div className="min-w-[240px] bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="h-36 bg-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <p className="text-xs text-white/80">Property Image</p>
                </div>
                <h4 className="text-lg font-medium mb-1">Marina Penthouse</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">320 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 8.2M</span>
                </div>
              </div>
              
              <div className="min-w-[240px] bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="h-36 bg-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <p className="text-xs text-white/80">Property Image</p>
                </div>
                <h4 className="text-lg font-medium mb-1">Burj Khalifa Apartment</h4>
                <p className="text-sm text-white/80 mb-2">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">180 m²</span>
                  <span className="text-sm font-semibold text-secondary">AED 5.7M</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="bg-secondary/90 hover:bg-secondary text-accent px-6 py-2 rounded-full shadow-md transition-all font-medium text-sm">
                View All Properties
              </button>
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
