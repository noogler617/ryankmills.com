import { Navigation } from "../components/nav";

export default function Projects() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="max-w-3xl w-full pt-24 pb-16">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-4 text-center">
            Projects
          </h1>
          <p className="text-zinc-400 text-center mb-12">
            Things I&apos;ve built and tinkered with.
          </p>

          <div className="w-full rounded-lg overflow-hidden border border-zinc-700 shadow-2xl">
            <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-zinc-400 text-sm font-mono">YouTube Project</span>
            </div>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yzzvHq4B3wU"
                title="Ryan Mills - Project"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.youtube.com/watch?v=yzzvHq4B3wU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 text-sm duration-300 underline underline-offset-4"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
