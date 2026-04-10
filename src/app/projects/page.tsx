import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects loaded.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
