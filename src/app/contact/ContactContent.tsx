"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import EditorialImage from "@/components/EditorialImage";

export default function ContactContent() {
  return (
    <div className="bg-surfaceDark text-ivory min-h-screen">
      
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left: Warm Intro */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <span className="text-eyebrow text-antiqueGold mb-8 block">Connect</span>
                <h1 className="font-display text-5xl md:text-7xl leading-[1.1] font-light text-ivory mb-10">
                  Begin Your <br />
                  <span className="italic text-antiqueGold">Journey</span>
                </h1>
                
                <div className="mb-12">
                  <EditorialImage 
                    src="/images/generated/lotus-philosophy.png"
                    alt="Soft nature detail"
                    variant="organic-2"
                    className="w-32 h-32 opacity-70"
                  />
                </div>

                <p className="font-body text-lg font-light text-ivory/70 leading-relaxed mb-12 max-w-md">
                  Whether you are called to a private mentorship, an immersion in India, or simply wish to say hello, I am honored to hear from you. Please share a little about where you are on your path.
                </p>

                <div className="space-y-6">
                  <div>
                    <span className="text-eyebrow text-antiqueGold/60 block mb-2">Direct Email</span>
                    <a href="mailto:sanctuary@shaktilotus.com" className="font-body text-ivory hover:text-antiqueGold transition-colors">sanctuary@shaktilotus.com</a>
                  </div>
                  <div>
                    <span className="text-eyebrow text-antiqueGold/60 block mb-2">WhatsApp</span>
                    <p className="font-body text-ivory">+91 91255 62555</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: The Form Container */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="bg-ivory text-textDark p-10 md:p-16 rounded-tl-[80px] rounded-br-[80px]">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
