import { useEffect, useState, useCallback } from "react";
import { ProjectCard } from "../components/projectCard";
import { supabase } from "../supabaseClient.js";
import { Modal } from "../components/modals/modal";
import { ContentProject } from "../components/modals/insertProject.jsx";

const PER_PAGE = 4;

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsData, setProjectsData] = useState([]);
  const [totalProjects, setTotalProjects] = useState(0);

  const fetchData = useCallback(async () => {
    const startIndex = (currentPage - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE - 1;

    const { data, error, count } = await supabase
      .from("Projects")
      .select("*", { count: "exact" })
      .range(startIndex, endIndex);

    if (error) {
      console.log(error);
    } else {
      setProjectsData(data);
      setTotalProjects(count);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const pageNumber = Math.ceil(totalProjects / PER_PAGE);

  return (
    <>
      <section id="Projects" className="px-4 py-10 bg-pop-primary">
        <div className="container flex flex-col justify-center items-center gap-6  mx-auto">
          <h2 className="font-kalam font-semibold text-center text-4xl text-lght-primary">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {projectsData.map((project) => (
              <Modal
                key={project.project_id}
                Content={<ContentProject project={project} />}
              >
                {({ setIsOpened }) => (
                  <ProjectCard
                    onClick={() => setIsOpened(true)}
                    project={project}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="font-prompt text-sm flex text-lght-primary items-center gap-2 pt-4">
            {Array.from({ length: pageNumber }).map((_, index) => (
              <button
                key={`page-${index + 1}`}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-2 py-1 cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-lght-primary text-pop-primary font-bold"
                    : ""
                } rounded-md`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
