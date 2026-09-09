import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-light opacity-50" />
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-xora-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-navy-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative text-center">
        <div className="mx-auto max-w-xl rounded-3xl border border-navy-100 bg-white/90 p-8 shadow-card backdrop-blur-xl sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-xora-50 px-3 py-1 text-xs font-bold text-xora-600 border border-xora-200">
            <Compass className="h-3.5 w-3.5" />
            Page Not Found
          </span>

          <h1 className="mt-6 font-display text-6xl font-extrabold tracking-tight text-navy-950 sm:text-7xl">
            404
          </h1>

          <h2 className="mt-3 font-display text-xl font-bold text-navy-900 sm:text-2xl">
            Oops! The page you are looking for does not exist.
          </h2>

          <p className="mt-3 text-sm text-navy-600 leading-relaxed">
            The link you followed might be broken, or the page may have been moved or updated.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/" variant="primary" className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Button>
            <Button href="/business" variant="outline" className="w-full sm:w-auto gap-2">
              <Sparkles className="h-4 w-4" />
              Digital Services
            </Button>
            <Button href="/internships" variant="navy" className="w-full sm:w-auto gap-2">
              <ArrowLeft className="h-4 w-4" />
              Internships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
