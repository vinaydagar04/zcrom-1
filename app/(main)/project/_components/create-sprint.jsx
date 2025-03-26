"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const SprintCreationForm = ({
  projectTitle,
  projectKey,
  projectId,
  sprintKey,
}) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>
        <h1>{projectTitle}</h1>
        <Button
          className="mt-2"
          onClick={() => setShowForm(!showForm)}
          variant={showForm ? "destructive" : "default"}
        >
          {showForm ? "Cancel" : "Create New Sprint"}
        </Button>
      </div>

      {showForm && <>From</>}
    </>
  );
};

export default SprintCreationForm;
