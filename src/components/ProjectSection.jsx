import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Instagram Clone",
    description:
      "A full stack clone of Instagram created using Flutter and Dart",
    image: "/projects/insta-clone.png",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/Shubhamjha987/insta-clone",
  },
  {
    id: 2,
    title: "Green Chilly Detection",
    description:
      "A ML based project that detects the green chilly present in the chilly plant",
    image: "/projects/project-chilly.png",
    tags: ["Detectron-2", "RCNN", "YOLO"],
    githubUrl: "https://github.com/Shubhamjha987/insta-clone",
  },
  {
    id: 3,
    title: "Tree Visualization",
    description: "A website that visualize the tree traversal techniques",
    image: "/projects/tree-visualization.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://shubhamjha987.github.io/TreeVisualizer/",
    githubUrl: "https://github.com/Shubhamjha987/TreeVisualizer",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below are some of the projects I've worked on. Feel free to check them
          out and let me know if you have any feedback or ideas for improvement
          — I truly value your input!
        </p>

        <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Shubhamjha987"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {" "}
            Check my other works on Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
