import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div classname="space-y-6">
          <h1 className="p-5 text-4xl md:text-6xl font-boldtracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Shubham Jha{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mx-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a second-year M.Tech student at IIT Ropar, with a passion for
            software development. I completed my B.Tech from KIIT University and
            have previously worked as a Master Data Management Intern at
            Novartis, where I gained industry experience in managing and
            optimizing data pipelines in a global healthcare setting.
          </p>

          <div className="pt-6 mx-auto opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button">
              View My work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
