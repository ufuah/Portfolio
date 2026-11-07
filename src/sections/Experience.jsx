const experiences = [
  {
    period: "2025 — Present",
    role: "Food Delivery Platform",
    company: "PalateOasis · Multi-city, Nigeria",
    description:
      "Full-stack build of a food delivery platform serving multiple Nigerian cities: React Native app with animated stories and a coverflow promo carousel, wallet system, rider dispatch, live socket management, Redis-cached store menus, and a Python recommendation microservice. Ships through EAS builds and OTA updates, with a companion store-owner app.",
    technologies: ["React Native", "Expo", "Node.js", "MySQL", "FastAPI", "Redis"],
    current: true,
  },
  {
    period: "2026",
    role: "Real Estate App with 3D Onboarding",
    company: "Nockspot",
    description:
      "Mobile real estate app with an immersive 3D door onboarding built in React Three Fiber, a custom floating tab bar and property detail experience, plus a Next.js admin dashboard. Built the backend from scratch with dual JWT auth and a wallet and payment architecture, deployed on a VPS with Coolify and Traefik.",
    technologies: ["React Native", "Three.js", "Next.js", "Zustand", "Node.js", "Paystack"],
    current: false,
  },
  {
    period: "2026",
    role: "Inventory & Sales Management System",
    company: "ACS Roofings",
    description:
      "Stock and sales system covering reservations, returns, exchanges and damage adjustments, with low-stock alerts and automated period close-outs that snapshot history and roll opening stock forward on a configurable schedule. Includes a calendar view for browsing past periods and Excel export.",
    technologies: ["React", "Zustand", "Node.js", "Express", "MySQL", "node-cron"],
    current: false,
  },
  {
    period: "2026",
    role: "Fashion E-commerce Marketplace",
    company: "SHIOMA HUB",
    description:
      "Fashion marketplace for clothing, footwear, accessories and beauty, with a premium brand identity, a Seller Center dashboard for independent brands, and a modular TypeScript backend handling payments, background job queues, caching, and S3-compatible product image storage with a swappable provider layer.",
    technologies: ["React", "TypeScript", "Zustand", "Prisma", "Redis", "BullMQ", "Paystack"],
    current: false,
  },
  {
    period: "2024",
    role: "Hair & Beauty Website",
    company: "Hairlord Beauty · hairlordbeauty.com",
    description:
      "Live website for the Hairlord Beauty hair brand, designed and built end to end.",
    technologies: [],
    current: false,
  },
  {
    period: "2026",
    role: "Partner Portal",
    company: "Pluto · Cloud Services",
    description:
      "Partner portal that lets resellers offer Pluto's cloud services to their own customers under their own brand, with customer sign-up and billing handled on the partner's page while Pluto stays invisible in the background.",
    technologies: ["Partner Portal", "Cloud Services"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Selected Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Products I've{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              built and shipped.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A freelance developer and 3D artist working under Render0 Studios,
            delivering mobile apps, backends and product visuals for clients
            across Nigeria and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
