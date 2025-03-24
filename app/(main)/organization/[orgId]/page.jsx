import { auth } from "@clerk/nextjs/server";
import { getOrganization } from "@/actions/organization";

export default async function OrganizationPage({ params }) {
  const { orgId } = await params; // ✅ Removed unnecessary `await`
  console.log("Received orgId:", orgId);

  const { userId } = auth();

  const organization = await getOrganization(orgId);
  console.log("Final organization data:", organization);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-title pb-2">
          {organization.name}&rsquo;s Projects
        </h1>
      </div>
    </div>
  );
}
