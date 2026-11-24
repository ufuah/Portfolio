import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Shaatuu",
    description:
      "A creative digital platform with a modern interface, interactive touches and a polished frontend.",
    image: "/projects/shaatuu.png",
    tags: ["React", "Next.js"],
    link: "https://www.shaatuu.com/",
  },
  {
    title: "Klonex",
    description:
      "Corporate website for a UK technology company, with sleek positioning and service-focused content.",
    image: "/projects/klonex.png",
    tags: ["WordPress", "SEO"],
    link: "https://klonex.co.uk/",
  },
  {
    title: "Chelsea Pharmacy",
    description:
      "London pharmacy website featuring an online store with 4,000+ products, bookable clinical services and virtual consultations.",
    image: "/projects/chelsea-pharmacy.png",
    tags: ["E-commerce", "Booking"],
    link: "https://chelseapharmacy.co.uk/",
  },
  {
    title: "Fintech Dashboard",
    description:
      "A financial analytics platform with data visualization, portfolio management and financial insights.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {

            const hasLiveLink =
              project.link &&
              project.link !== "#";

            const hasGithubLink =
              project.github &&
              project.github !== "#";

            return (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">

                  {hasLiveLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                      className="block w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none" />

                  {/* Project Links */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >

                    {hasLiveLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}

                    {hasGithubLink && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">

                  <div className="flex items-start justify-between">

                    {hasLiveLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold group-hover:text-primary transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>
                    )}

                    {hasLiveLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}

                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mobile-friendly project link */}
                  {hasLiveLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium pt-2 hover:gap-3 transition-all"
                    >
                      Visit Live Website
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="/projects">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>

      </div>
    </section>
  );
};
