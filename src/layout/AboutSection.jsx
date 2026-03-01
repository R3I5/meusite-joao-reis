import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-4 relative snap-start">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2 font-semibold">
              Software Engineering student seeking an opportunity to grow and gain real-world experience.
            </h3>

            <p className="text-muted-foreground">
              I am a Software Engineering student with a strong interest in building practical and well-structured solutions. 
              I am currently focused on developing my programming skills through hands-on projects and continuous learning.
            </p>

            <p>
              I enjoy solving problems, understanding how systems work, and turning ideas into functional applications.
              As I grow in the field, I am constantly exploring new technologies and improving my foundations to become a better developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#skills" className="cosmic-button">
                What i've been learning
              </a>
              <a
                href="/renatarsilva_cv_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV{" "}
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
                  <h4 className="font-semibold text-lg">Development Skills</h4>
                  <p className="text-muted-foreground">
                    I love creating apps that are both functional and easy to
                    use.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">About Me</h4>
                  <p className="text-muted-foreground">
                    Curious developer, always learning and experimenting with
                    new tech.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career & Projects</h4>
                  <p className="text-muted-foreground">
                    From class projects to personal ideas, I enjoy turning
                    concepts into real solutions.
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
