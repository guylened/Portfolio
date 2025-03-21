import { supabase } from "../supabaseClient.js";
import { useEffect, useState } from "react";
import { Slider } from "../components/slider";

export const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from("News").select("*");
    if (error) {
      console.log(error);
    } else {
      setNewsData(data);
      setLoading(false);
    }
  };

  const newAudios = newsData.filter(
    (news) => news.category === "Audiolivre" || news.category === "Podcast"
  );

  const newCourses = newsData.filter(
    (news) =>
      news.category === "Youtube" ||
      news.category === "Mooc" ||
      news.category === "Tutoriel"
  );

  return (
    <section id="News" className="px-4 py-10 bg-pop-primary">
      <div className="container flex flex-wrap sm:flex-nowrap justify-center items-center gap-6 mx-auto">
        <div className="container h-[480px] p-5 flex flex-col justify-start items-center gap-6 border-2 border-lght-primary rounded-lg">
          <h3 className="font-rubik font-medium text-lg text-center text-lght-primary">
            Mes derniers podcasts ou audiolivres écoutés
          </h3>
          <div>
            {loading ? (
              <p className="text-lght-primary">Chargement...</p>
            ) : newAudios.length > 0 ? (
              <Slider news={newAudios} />
            ) : (
              <p className="text-lght-primary">Aucune donnée disponible.</p>
            )}
          </div>
        </div>
        <div className="container h-[480px] p-5 flex flex-col justify-start items-center gap-6 border-2 border-lght-primary rounded-lg">
          <h3 className="font-rubik font-medium text-lg text-center text-lght-primary">
            Mes derniers cours en ligne suivis
          </h3>

          <div>
            {loading ? (
              <p className="text-lght-primary">Chargement...</p>
            ) : newCourses.length > 0 ? (
              <Slider news={newCourses} />
            ) : (
              <p className="text-lght-primary">Aucune donnée disponible.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
