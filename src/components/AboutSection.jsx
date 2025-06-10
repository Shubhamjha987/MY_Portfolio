import { Brain, Briefcase, Code, Phone, Smartphone, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semiboldn text-primary">
              I am passionate about software development and sports in general.
              Sometimes, I also enjoy pencil sketching and reading books.
            </h3>

            <p className="text-muted-foreground">
              I have 6 months of experience as a Master Data Management (MDM)
              Intern at Novartis, where I gained hands-on exposure to
              industry-standard MDM tools like TIBCO EBX and Reltio.
            </p>
            <p className="text-muted-foreground">
              As part of the team responsible for migrating data from TIBCO EBX
              to Reltio, I designed and implemented various recipes on Reltio
              Integration Hub (RIH) to seamlessly integrate data from SPOR and
              IQVIA into Reltio.
            </p>
            {/* <p className="text-muted-foreground">
              I also built multiple custom workflows to ensure a smooth
              migration process while maintaining strict adherence to data
              governance policies. Additionally, I implemented several business
              rules that significantly improved data quality and consistency
              throughout the migration.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a href="/Shubham_Jha_Resume.pdf" className="cosmic-button">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating full stack responsive Websites using react and sprinboot
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Mobile App Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive Mobile Applications using Flutter
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Developing predictive models using Python, Scikit-learn, and TensorFlow. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
