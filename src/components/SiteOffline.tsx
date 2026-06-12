import BrandLogo from "@/components/BrandLogo";

export default function SiteOffline() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink px-6 py-16 text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,168,90,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lightGold/60 to-transparent" />
      <section className="relative mx-auto max-w-2xl text-center">
        <BrandLogo className="justify-center" />
        <p className="mt-10 text-xs uppercase tracking-[0.34em] text-lightGold/80">Shakti Loto</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-none tracking-[0.08em] text-lightGold md:text-7xl">
          Site Offline
        </h1>
        <div className="mx-auto my-8 flex max-w-sm items-center gap-4 text-lightGold/70" aria-hidden="true">
          <span className="h-px flex-1 bg-current" />
          <span className="moon-phase crescent scale-75" />
          <span className="h-px flex-1 bg-current" />
        </div>
        <p className="mx-auto max-w-xl font-display text-3xl italic leading-tight text-parchment md:text-4xl">
          This sacred space is resting for now.
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm uppercase leading-relaxed tracking-[0.18em] text-ivory/70">
          Please return soon.
        </p>
      </section>
    </main>
  );
}
