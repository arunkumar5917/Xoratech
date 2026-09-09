import { Button } from "@/components/ui/Button";

const APPLICATION_FORM_URL = "https://forms.gle/9N3W7SjESPYzLiTZ9";

export default function ApplyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Apply Now</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Internship Application
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Fill in your details and apply for your preferred internship domain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-xl text-center">
            <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-10">
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Ready to Start Your Internship?
              </h2>
              <p className="mt-3 text-sm text-navy-500">
                Click the button below to open the application form in a new tab and submit your details.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button href={APPLICATION_FORM_URL} variant="primary" external className="w-full sm:w-auto">
                  Open Application Form
                </Button>
                <Button href="/internships" variant="outline" className="w-full sm:w-auto">
                  Back to Internships
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}