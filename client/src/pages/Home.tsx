import ConverterCard from "@/components/converter/ConverterCard";
import InformationSection from "@/components/converter/InformationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-secondary bg-clip-text text-transparent mb-3">Property Price Converter</h1>
          <p className="text-lg text-slate-600">Trouvez votre coin de paradis aux Émirats avec notre convertisseur</p>
          <p className="text-md text-slate-500">Convert between Euros per square meter and Emirati Dirhams per square foot</p>
        </header>
        
        {/* Converter Card Component */}
        <ConverterCard />
        
        {/* Information Section Component */}
        <InformationSection />
        
        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="h-1 w-1 rounded-full bg-secondary"></span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span className="h-1 w-1 rounded-full bg-accent"></span>
            <span className="h-1 w-3 rounded-full bg-secondary"></span>
            <span className="h-1 w-1 rounded-full bg-accent"></span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span className="h-1 w-1 rounded-full bg-secondary"></span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Property Price Converter | Exchange rates updated daily</p>
        </footer>
      </div>
    </div>
  );
}
