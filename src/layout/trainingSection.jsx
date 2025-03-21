import { TrainingCard } from "../components/trainingCard";
import { supabase } from "../supabaseClient.js";
import { useEffect, useState } from "react";

export const TrainingSection = () => {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from("Training").select("*");
    if (error) {
      console.log(error);
    } else {
      setTrainingData(data);
    }
  };

  return (
    <>
      <section id="Training" className="px-4 py-10 bg-pop-primary">
        <div className="container flex flex-col justify-center items-center gap-6 mx-auto">
          <h2 className="font-kalam font-semibold text-4xl text-center text-lght-primary">
            Formations
          </h2>
          {trainingData.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
      </section>
    </>
  );
};
