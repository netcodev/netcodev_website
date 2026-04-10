import { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, date, tags, link } = project.metadata;

  return (
    <div className="rounded-lg p-6 hover:bg-gray-950 transition-colors group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-gray-200 transition-colors">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          
          <p className="text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-gray-900 text-gray-400 border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {date && (
        <p className="text-sm text-gray-600 mt-4">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
    </div>
  );
}
