import { Cog } from "lucide-react";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <style>{`
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(15deg); } /* Slight offset so teeth mesh */
          to { transform: rotate(-345deg); }
        }
        .gear-cw { animation: spin-cw 4s linear infinite; }
        .gear-ccw-1 { animation: spin-ccw 3s linear infinite; }
        .gear-ccw-2 { animation: spin-ccw 2.5s linear infinite; }
      `}</style>
      
      <div className="relative flex items-center justify-center">
        {/* Top Left Orange Gear */}
        <div className="absolute -left-6 -top-6 text-primary gear-ccw-1">
          <Cog className="h-12 w-12" strokeWidth={2.5} />
        </div>
        
        {/* Center Grey Gear */}
        <div className="text-muted-foreground/80 gear-cw">
          <Cog className="h-20 w-20" strokeWidth={2} />
        </div>
        
        {/* Bottom Right Orange Gear */}
        <div className="absolute -bottom-4 -right-4 text-primary gear-ccw-2">
          <Cog className="h-10 w-10" strokeWidth={3} />
        </div>
      </div>
      
      <div className="mt-8 font-display text-xl font-black tracking-[0.2em] text-foreground">
        LOADING<span className="text-primary">...</span>
      </div>
    </div>
  );
}
