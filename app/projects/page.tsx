import BackgroundAnimation from "@/components/ui/background-animation";
import ProjectsWrapper from "@/components/user/projects/ProjectsWrapper";
export const dynamic = "force-dynamic";
export default async function ProjectsPage() {
  return (
    <>
      <BackgroundAnimation />
      <div className="container  mt-18 mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-10">Projects</h1>
        <ProjectsWrapper />
      </div>
    </>
  );
}
