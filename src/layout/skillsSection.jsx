import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

export const SkillsSection = () => {
  const [technologiesData, setTechnologiesData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from("Technologies").select("*");
    if (error) {
      console.log(error);
    } else {
      setTechnologiesData(data);
    }
  };

  const filteredTech = technologiesData.filter(
    (tech) => tech.use_tech === true
  );

  const iconDev = filteredTech.filter(
    (tech) => tech.tech_category === "Développement"
  );

  const iconNoLowIA = filteredTech.filter(
    (tech) =>
      tech.tech_category === "Low-Code" ||
      tech.tech_category === "No-Code" ||
      tech.tech_category === "IA"
  );

  const iconDivers = filteredTech.filter(
    (tech) => tech.tech_category === "Divers"
  );

  return (
    <>
      <section
        id="Skills"
        className="px-4 py-10 bg-lght-primary dark:bg-drk-primary"
      >
        <div className="container flex flex-col justify-center items-center gap-5 mx-auto">
          <h2 className="font-kalam font-semibold text-4xl text-center text-pop-primary dark:text-lght-primary">
            Technologies
          </h2>
          <div className="container p-6 flex flex-col justify-center items-center gap-4 mx-auto">
            <h3 className="font-rubik font-medium text-center text-xl text-pop-primary dark:text-lght-primary">
              Développement
            </h3>
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-10">
              {iconDev.map((tech) => (
                <li key={tech.tech_id}>
                  <img
                    className="size-16"
                    src={tech.tech_img}
                    alt={tech.tech_name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="container p-6 flex flex-col justify-center items-center gap-4 mx-auto">
            <h3 className="font-rubik font-medium text-center text-xl text-pop-primary dark:text-lght-primary">
              Low-code, No-code et IA
            </h3>
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-10">
              {iconNoLowIA.map((tech) => (
                <li key={tech.tech_id}>
                  <img
                    className="size-16"
                    src={tech.tech_img}
                    alt={tech.tech_name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="container p-6 flex flex-col justify-center items-center gap-4 mx-auto">
            <h3 className="font-rubik font-medium text-center text-xl text-pop-primary dark:text-lght-primary">
              Autres outils
            </h3>
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-10">
              {iconDivers.map((tech) => (
                <li key={tech.tech_id}>
                  <img
                    className="size-16"
                    src={tech.tech_img}
                    alt={tech.tech_name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
