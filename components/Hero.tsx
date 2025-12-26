import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden text-center py-16 px-6 md:py-20 md:px-12 lg:py-24 lg:px-20 hero-gradient">
      
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute left-[-10%] top-[15%]">
          <div className="relative">
            <div className="absolute -left-20 top-0 h-28 w-56 rounded-full bg-blue-100/70 shadow-2xl" />
            <div className="absolute left-0 top-10 h-36 w-72 rounded-full bg-blue-50/80 shadow-2xl" />
            <div className="absolute left-40 top-4 h-32 w-60 rounded-full bg-blue-100/60 shadow-2xl" />
          </div>
        </div>

       
        <div className="absolute right-[-5%] top-[35%]">
          <div className="relative scale-90">
            <div className="absolute -left-10 top-6 h-24 w-48 rounded-full bg-blue-100/60" />
            <div className="absolute left-10 top-0 h-32 w-64 rounded-full bg-blue-50/75 shadow-xl" />
            <div className="absolute left-44 top-8 h-28 w-52 rounded-full bg-blue-100/50" />
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[20%]">
          <div className="relative scale-110">
            <div className="absolute -left-16 top-4 h-32 w-64 rounded-full bg-blue-100/80 shadow-2xl" />
            <div className="absolute left-8 top-0 h-40 w-80 rounded-full bg-blue-50/90 shadow-2xl" />
            <div className="absolute left-52 top-10 h-36 w-68 rounded-full bg-blue-100/70 shadow-2xl" />
          </div>
        </div>

    
        <div className="absolute right-[10%] top-[10%] opacity-70">
          <div className="relative scale-75">
            <div className="absolute left-0 top-8 h-20 w-40 rounded-full bg-blue-100/50" />
            <div className="absolute left-16 top-0 h-24 w-48 rounded-full bg-blue-50/60 shadow-xl" />
            <div className="absolute left-36 top-6 h-20 w-36 rounded-full bg-blue-100/40" />
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 opacity-15">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full blur-[20px] bg-[var(--color-accent-primary)]" />
        <div className="absolute right-[15%] top-[40%] h-40 w-40 rounded-full blur-[20px] bg-[var(--color-accent-primary)]" />
        <div className="absolute left-[30%] bottom-[20%] h-36 w-36 rounded-full blur-[20px] bg-[var(--color-accent-primary)]" />
        <div className="absolute right-[25%] bottom-[30%] h-28 w-28 rounded-full blur-[20px] bg-[var(--color-accent-primary)]" />
      </div>

      
      <div className="relative z-10 mx-auto max-w-[1400px] w-full">
        <h1 className="mb-6 max-w-[900px] mx-auto text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-primary-text)]">
          Transform Your Operations with Intelligent{" "}
          <span className="inline-block rounded-[0.5rem] py-1 px-3 bg-[var(--color-highlight-box)]">
            Automation
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-[650px] text-[1.125rem] leading-[1.7] text-[var(--color-secondary-text)]">
          An intelligent operations platform built to eliminate manual work,
          minimize mistakes, and provide complete transparency into your
          business processes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="hero-button-primary px-8 py-3.5 text-base font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg rounded-[0.5rem]">
            Schedule Demo <ArrowRight className="ml-1 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="hero-button-secondary px-8 py-3.5 text-base font-medium transition-all rounded-[0.5rem]"
          >
            Explore Platform <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <div className='h-[500px] w-full'>
          <DashboardPreview/>
          </div>
        </div>
      </div>
      
    </section>
    
  );
}