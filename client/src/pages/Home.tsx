import ConverterCard from "@/components/converter/ConverterCard";
import InformationSection from "@/components/converter/InformationSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-secondary-dark mb-2">Property Price Converter</h1>
        <p className="text-slate-500">Convert between Euros per square meter and Dirhams per square foot</p>
      </header>
      
      {/* Converter Card Component */}
      <ConverterCard />
      
      {/* Information Section Component */}
      <InformationSection />
      
      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Property Price Converter | Exchange rates updated daily</p>
      </footer>
    </div>
  );
}
