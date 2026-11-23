import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Emmanuel is a talented developer who understands how to turn ideas into functional products. His attention to detail and problem-solving approach really stand out.",
    author: "Abaisor Success",
    role: "Client",
    // avatar: "/testimonials/abaisor.jpg",
  },
  {
    quote:
      "Working with Emmanuel was a great experience. He understands technical requirements quickly and knows how to bring ideas to life through clean and functional solutions.",
    author: "Okotete Emmanuel",
    role: "Project Collaborator",
    // avatar: "/testimonials/okotete.jpg",
  },
  {
    quote:
      "Emmanuel combines creativity with strong technical skills. I appreciate his commitment to delivering quality work and finding solutions when challenges arise.",
    author: "Sule Victoria",
    role: "Business Owner",
    // avatar: "/testimonials/sule.jpg",
  },
  {
    quote:
      "What I appreciate most about Emmanuel is his ability to understand an idea and turn it into something practical. He's creative, thoughtful and committed to quality.",
    author: "Ochuko",
    role: "Project Collaborator",
    // avatar: "/testimonials/ochuko.jpg",
  },
  {
    quote:
      "Emmanuel has a good eye for detail and understands how technology can solve real problems. His dedication to his work is something I genuinely admire.",
    author: "Solomon",
    role: "Client",
    // avatar: "/testimonials/solomon.jpg",
  },
  {
    quote:
      "He's someone who takes his work seriously. I appreciate his willingness to listen, understand requirements and work towards delivering exactly what's needed.",
    author: "Miracle",
    role: "Business Owner",
    // avatar: "/testimonials/miracle.jpg",
  },
  {
    quote:
      "Emmanuel brings a combination of creativity, technical knowledge and problem-solving skills. He's always looking for ways to improve what he's building.",
    author: "Runa",
    role: "Project Collaborator",
    // avatar: "/testimonials/runa.jpg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                /> */}
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
