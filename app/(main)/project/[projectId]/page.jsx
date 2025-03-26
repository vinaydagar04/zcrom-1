import { getProject } from "@/actions/project";
import React from "react";
import SprintCreationForm from "../_components/create-sprint";

const ProjectPage = async ({ params }) => {
  const { projectId } = params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      {/* Sprint Creation */}
      <SprintCreationForm
        projectTitle={project.name}
        projectId={projectId}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
      />

      {/* Sprint Board */}
    </div>
  );
};

export default ProjectPage;
