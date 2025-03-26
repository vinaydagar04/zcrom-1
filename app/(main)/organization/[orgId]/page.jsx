import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "@/components/org-switcher";
import React from "react";

const Organization = async ({ params }) => {
  const { orgId } = await params;
  const organization = await getOrganization(orgId);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-title pb-2">
          {organization.name}&rsquo;s Projects
        </h1>
        {/* ord switcher */}
        <OrgSwitcher />
      </div>
      <div className="mb-4">Show org projects</div>
      <div className="mt-8">Show user assigned and reported issues here</div>
    </div>
  );
};

export default Organization;
