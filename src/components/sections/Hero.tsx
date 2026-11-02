export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[55vh] w-full max-w-5xl flex-col justify-center px-6 py-20 sm:px-8"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
        Welcome to my portfolio
      </p>
      <h1
        id="hero-title"
        className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        Your Name
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
        Add a short introduction about yourself and the work you do.
      </p>
    </section>
  );
}
