export default function PersonalResearchPage() {
  const papers = [
    {
      title: "Adapting to the Unknown: Training-Free Audio-Visual Event Perception with Dynamic Thresholds",
      venue: "CVPR 2025",
      description:
        "A training-free method for adapting audio-visual perception under distribution shift using dynamic thresholding.",
      links: {
        paper: "#",
        code: "#",
      },
    },
    {
      title: "TokenTrim",
      venue: "Research Project",
      description:
        "Inference-time token pruning for long-horizon video generation to improve stability and reduce drift.",
      links: {
        paper: "#",
        code: "#",
      },
    },
    {
      title: "FlowMo",
      venue: "Research Project",
      description:
        "Variance-based motion guidance for video diffusion models, with a focus on controllable motion generation.",
      links: {
        paper: "#",
        code: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-20">
        <header className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
              Research · Vision · Generative Models
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Ariel Shaulov
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
              I am a researcher working on computer vision, video generation,
              world models, and robust machine learning. My recent work focuses
              on long-horizon video generation, motion control, and efficient
              inference for generative models.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="space-y-2 text-sm text-neutral-300">
              <p>
                <span className="text-neutral-500">Email</span>
                <br />
                <a href="mailto:youremail@example.com" className="hover:text-white">
                  youremail@example.com
                </a>
              </p>
              <p>
                <span className="text-neutral-500">GitHub</span>
                <br />
                <a href="https://github.com/yourusername" className="hover:text-white">
                  github.com/yourusername
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Google Scholar</span>
                <br />
                <a href="#" className="hover:text-white">
                  Scholar profile
                </a>
              </p>
            </div>
          </div>
        </header>

        <section className="mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 text-neutral-300 leading-7">
              My interests lie at the intersection of vision, generative models,
              and embodied intelligence. I like building methods that make
              modern visual models more controllable, efficient, and reliable.
            </p>
            <p className="mt-4 text-neutral-300 leading-7">
              This page collects selected papers and ongoing projects. You can
              use it as a lightweight academic homepage hosted on GitHub Pages.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/yourusername"
                className="rounded-2xl border border-white/10 px-4 py-3 transition hover:bg-white/5"
              >
                GitHub
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/10 px-4 py-3 transition hover:bg-white/5"
              >
                Google Scholar
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/10 px-4 py-3 transition hover:bg-white/5"
              >
                CV / Resume
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Selected Research</h2>
            <p className="text-sm text-neutral-500">Add your paper links here</p>
          </div>

          <div className="grid gap-5">
            {papers.map((paper) => (
              <article
                key={paper.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-xl font-medium">{paper.title}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{paper.venue}</p>
                    <p className="mt-4 leading-7 text-neutral-300">{paper.description}</p>
                  </div>

                  <div className="flex gap-3 text-sm">
                    <a
                      href={paper.links.paper}
                      className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
                    >
                      Paper
                    </a>
                    <a
                      href={paper.links.code}
                      className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-6 text-sm text-neutral-500">
          Built for GitHub Pages · Replace placeholders with your real links.
        </footer>
      </div>
    </div>
  );
}
