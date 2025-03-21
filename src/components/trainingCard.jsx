import { Button } from "../components/buttons";
import { Icon } from "./icons";

export const TrainingCard = ({ training }) => {
  return (
    <>
      <div className="container p-5 flex flex-col justify-center items-center gap-4 border-2 border-lght-primary rounded-lg">
        <div className="container flex flex-wrap justify-between items-center gap-2">
          <a
            href={training.school_link}
            aria-label="lien vers les lieux de formations"
            className=" flex gap-2 font-rubik font-medium text-lg text-lght-primary hover:text-lght-secondary"
            target="_blank"
          >
            <Icon name="arrow-up" />
            {training.school_name}
          </a>
          <h3 className="font-rubik font-medium text-lg text-lght-primary">
            {training.training_name}
          </h3>
          <div className=" flex gap-1 font-prompt font-medium text-justify text-lght-primary">
            <p>{training.training_start}</p>
            <span> </span>
            <p>{training.training_end}</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className="font-prompt text-justify text-lght-secondary">
            {training.description}
          </p>
        </div>
      </div>
    </>
  );
};
