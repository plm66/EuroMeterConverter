import ConverterCard from "@/components/converter/ConverterCard";
import InformationSection from "@/components/converter/InformationSection";
import dubaiImage from "@assets/6-1240x720.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dubai Image */}
      <div className="relative mb-16 h-[600px]" style={{ 
        backgroundImage: `url(${dubaiImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-6xl text-white font-extrabold mb-6">
              Tailored content that converts, engages, and inspires
            </h1>
            <div className="h-0.5 w-24 bg-secondary mx-auto my-6"></div>
            <p className="text-xl text-white font-light mb-8">
              Property Price Converter for Real Estate Companies
            </p>
          </div>
        </div>
      </div>
        
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Main Content */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Property Price Converter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Converting between Euros per square meter and UAE Dirhams per square foot made simple
            </p>
          </div>
          
          {/* Converter Card Component */}
          <ConverterCard />
          
          {/* Information Section Component */}
          <InformationSection />
        </div>
        
        {/* Sponsored Properties Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sponsored Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover premium listings from our trusted partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-2 py-1">SPONSORED</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Palm Jumeirah Villa</h3>
                <p className="text-gray-600 mb-4">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">550 m²</span>
                  <span className="text-lg font-bold text-primary">AED 12.5M</span>
                </div>
              </div>
            </div>
            
            {/* Property Card 2 */}
            <div className="shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-2 py-1">SPONSORED</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Marina Penthouse</h3>
                <p className="text-gray-600 mb-4">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">320 m²</span>
                  <span className="text-lg font-bold text-primary">AED 8.2M</span>
                </div>
              </div>
            </div>
            
            {/* Property Card 3 */}
            <div className="shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-2 py-1">SPONSORED</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Burj Khalifa Apartment</h3>
                <p className="text-gray-600 mb-4">Dubai, UAE</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">180 m²</span>
                  <span className="text-lg font-bold text-primary">AED 5.7M</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 font-medium">
              View All Properties
            </button>
          </div>
        </div>
        
        {/* Sponsors Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Our Premium Partners</h2>
            <div className="h-0.5 w-16 bg-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="h-16 w-32 flex items-center justify-center text-xl font-semibold text-primary">
              EMAAR
            </div>
            <div className="h-16 w-32 flex items-center justify-center text-xl font-semibold text-primary">
              DAMAC
            </div>
            <div className="h-16 w-32 flex items-center justify-center text-xl font-semibold text-primary">
              NAKHEEL
            </div>
            <div className="h-16 w-32 flex items-center justify-center text-gray-400 text-sm">
              Your Brand Here
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-10 border-t text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Property Price Converter | Exchange rates updated daily</p>
        </footer>
      </div>
    </div>
  );
}
