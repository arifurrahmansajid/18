import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import logoImg from "@/assets/323refef@2x.png";
import { useLanguage } from "@/hooks/useLanguage";
import {
  FileText,
  Wrench,
  AlertTriangle,
  FileSearch,
  BookOpen,
  ArrowRight,
  Settings,
  ShieldCheck,
  Search,
  X,
} from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({
  q: z.string().optional().catch(""),
});

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  component: SearchResults,
});

// Mocked data functions for the search
function getMockResults(query: string) {
  const q = query.toLowerCase();
  
  if (q.includes("520447") || q.includes("ff.xx")) {
    return [
      {
        type: "Fault Code",
        icon: AlertTriangle,
        title: "SPN 520447 FMI 3 - Steering Angle Sensor Out of Calibration",
        description: "Voltage above normal or shorted to high source.",
        category: "Steering System",
        color: "text-red-500",
        bg: "bg-red-500/10",
      },
      {
        type: "Diagnostic Procedure",
        icon: FileSearch,
        title: "Test procedure for Steering Angle Sensor (SPN 520447)",
        description: "Step-by-step diagnostic tree for testing voltage and continuity.",
        category: "Diagnostics",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      },
      {
        type: "Repair Manual",
        icon: Wrench,
        title: "Steering Column Replacement Guide",
        description: "Section 4.2 - Includes sensor calibration steps.",
        category: "Manuals",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        type: "Service Bulletin",
        icon: FileText,
        title: "TSB-2023-08: Sensor Harness Chafing",
        description: "Known issue with wire routing causing SPN 520447.",
        category: "Bulletins",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      }
    ];
  }

  if (q.includes("p0217") || q.includes("overheat")) {
    return [
      {
        type: "Fault Code",
        icon: AlertTriangle,
        title: "Kobelco P0217 - Engine Overheating",
        description: "Engine overheating, causing an output drop. Check coolant and radiator.",
        category: "Cooling System",
        color: "text-red-500",
        bg: "bg-red-500/10",
      },
      {
        type: "Troubleshooting Steps",
        icon: FileSearch,
        title: "Engine Overheating Diagnostic",
        description: "Inspect radiator for blockage, test thermostat, and verify coolant levels.",
        category: "Diagnostics",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      }
    ];
  }

  if (q.includes("w005") || q.includes("low oil pressure") || q.includes("oil") || q.includes("100") || q.includes("fmi 1")) {
    return [
      {
        type: "Fault Code",
        icon: AlertTriangle,
        title: "Kobelco W005 / Cummins SPN 100 - Low Engine Oil Pressure",
        description: "Engine oil pressure is below the normal operational range.",
        category: "Engine System",
        color: "text-red-500",
        bg: "bg-red-500/10",
      },
      {
        type: "Troubleshooting Steps",
        icon: FileSearch,
        title: "Low Oil Pressure Troubleshooting",
        description: "Check oil level, verify pressure sensor reading, inspect oil pump.",
        category: "Diagnostics",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
      },
      {
        type: "Repair Procedure",
        icon: Wrench,
        title: "Oil Pump Replacement",
        description: "Instructions for removing the oil pan and replacing the oil pump assembly.",
        category: "Repair",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        type: "Service Specs",
        icon: Settings,
        title: "Oil Pressure Specifications",
        description: "Idle: 15 psi minimum. Rated speed: 35-40 psi minimum.",
        category: "Specifications",
        color: "text-green-500",
        bg: "bg-green-500/10",
      }
    ];
  }
  

  
  if (q.includes("injector")) {
    return [
      {
        type: "Fault Code",
        icon: AlertTriangle,
        title: "Cat CID 1 FMI 5 - Cylinder 1 Injector",
        description: "Current below normal or open circuit.",
        category: "Fuel System",
        color: "text-red-500",
        bg: "bg-red-500/10",
      },
      {
        type: "Repair Procedure",
        icon: Wrench,
        title: "Unit Injector Replacement",
        description: "Removal and installation of electronic unit injectors.",
        category: "Repair",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        type: "Service Bulletin",
        icon: FileText,
        title: "TSB-2022-11: Injector Sealing Ring Update",
        description: "New part number for injector o-rings to prevent fuel bypass.",
        category: "Bulletins",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      },
      {
        type: "Parts Information",
        icon: Settings,
        title: "Injector Assembly & Components",
        description: "Exploded view and part numbers for Cat C15 injectors.",
        category: "Parts",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
      }
    ];
  }
  
  // Generic response
  return [
    {
      type: "Search Result",
      icon: BookOpen,
      title: `Results for "${query}"`,
      description: "Found matching documents across manuals and fault codes.",
      category: "General",
      color: "text-primary",
      bg: "bg-primary/10",
    }
  ];
}

function SearchResults() {
  const { q } = Route.useSearch();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const query = q || "";
  
  const results = query ? getMockResults(query) : [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1536px] items-center px-4 sm:px-6 gap-2 sm:gap-4">
          <a href="/" className="mr-2 sm:mr-4 flex items-center shrink-0">
            <img src={logoImg} alt="ReMech" className="h-7 sm:h-9 w-auto object-contain" />
          </a>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const q = formData.get("q") as string;
              if (q) navigate({ to: "/search", search: { q } });
            }} 
            className="flex-1 max-w-2xl relative"
          >
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" strokeWidth={1.8} />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder={t.search_placeholder}
              className="w-full bg-card border-2 border-border/80 focus:border-primary rounded-full py-2 sm:py-2.5 pl-9 sm:pl-12 pr-10 text-sm sm:text-[15px] outline-none shadow-sm transition-all"
            />
            {query && (
              <button 
                type="button"
                onClick={() => navigate({ to: "/search", search: { q: "" } })}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
              </button>
            )}
          </form>
          
          <Link 
            to="/" 
            className="ml-auto flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-border/80 text-muted-foreground hover:border-primary hover:text-primary transition-colors shrink-0"
            title="Close Search"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        </div>
      </header>
      
      <main className="flex-1 w-full mx-auto max-w-[1536px] px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-black mb-2 sm:mb-3 tracking-wide">
            Global Search
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
            {query ? (
              <>Showing universal solutions for <span className="font-semibold text-foreground">"{query}"</span></>
            ) : (
              "Please enter a search query."
            )}
          </p>
          
          {query && (
            <div className="space-y-4 sm:space-y-5">
              {results.map((result, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border bg-card transition hover:border-primary/50 hover:shadow-xl cursor-pointer">
                  <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl ${result.bg} ${result.color}`}>
                    <result.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">{result.type}</span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground">{result.category}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {query && results.length > 0 && (
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border border-border bg-card flex flex-col sm:flex-row items-center gap-5 sm:gap-6 shadow-sm text-center sm:text-left">
              <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold mb-1 font-display tracking-wide">{t.need_expert_help || "Didn't find what you need?"}</h4>
                <p className="text-sm sm:text-[15px] text-muted-foreground">{t.cta_ask_remech || "Ask our real mechanic experts directly."}</p>
              </div>
              <button className="w-full sm:w-auto rounded-xl bg-primary px-8 py-3.5 text-sm sm:text-[15px] font-bold text-black transition-transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-md mt-2 sm:mt-0">
                {t.cta_ask_now || "Ask ReMech"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
