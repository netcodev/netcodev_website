import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetadata {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  link?: string;
  image?: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

const projectsDir = path.join(process.cwd(), "src/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);

  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        metadata: data as ProjectMetadata,
        content,
      };
    })
    .sort((a, b) => {
      if (a.metadata.date && b.metadata.date) {
        return (
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime()
        );
      }
      return 0;
    });

  return projects;
}
