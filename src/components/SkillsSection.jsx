import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 90 }, 
  { name: "Flutter", level: 70 },
  { name: "Python", level: 95 },
  { name: "C/C++", level: 95 },
  { name: "JAVA", level: 70 },
  { name: "Machine Learning", level: 70 },
  { name: "Firebase", level: 60 },
  { name: "MySQL", level: 60 },
  { name: "Spring/Springboot", level: 60 },
  { name: "Git/GitHub", level: 90 },
  { name: "Figma", level: 40 },
  
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
