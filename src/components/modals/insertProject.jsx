import { Icon } from "../icons";

export const ContentProject = ({ project }) => (
  <>
    <img
      src={project.picture}
      alt={project.title}
      className="object-cover object-left-top w-full rounded-t-md h-[256px]"
    />
    <div className="flex flex-col justify-between items-center px-7 pt-4 pb-5 ">
      <div className="flex flex-col justify-between items-center gap-4">
        <h3 className="font-rubik text-center font-medium text-2xl text-drk-primary dark:text-lght-primary">
          {project.title}
        </h3>
        <div>
          <p className="font-prompt text-justify text-drk-secondary dark:text-lght-secondary">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 ">
          <a
            href={project.preview}
            aria-label="lien web"
            className="flex font-rubik font-medium  text-drk-primary hover:text-pop-primary dark:text-lght-primary dark:hover:text-pop-secondary"
            target="_blank"
          >
            <Icon name="link" />
            <p>Aperçu du projet</p>
          </a>
          <a
            href={project.view_code}
            aria-label="lien web"
            className=" flex font-rubik font-medium  text-drk-primary hover:text-pop-primary dark:text-lght-primary dark:hover:text-pop-secondary"
            target="_blank"
          >
            <Icon name="github" />
            <p>Voir le code</p>
          </a>
        </div>
      </div>
    </div>
  </>
);
