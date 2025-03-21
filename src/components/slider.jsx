import { useState, useEffect } from "react";
import { Icon } from "./icons";

export const Slider = ({ news }) => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (news.length === 0) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex < news.length - 1 ? prevIndex + 1 : 0
        );
        setIsFading(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [news.length]);

  if (news.length === 0) {
    return <p className="text-lght-primary">Aucune donnée disponible.</p>;
  }

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : news.length - 1
      );
      setIsFading(false);
    }, 500);
  };

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex < news.length - 1 ? prevIndex + 1 : 0
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="container relative w-full max-w-4xl mx-auto">
      <div className="container relative max-w-56 flex flex-col items-center justify-center gap-3">
        <div className="container flex flex-col justify-center items-center gap-2">
          <button
            onClick={prevSlide}
            className="absolute z-10 -left-5 bg-lght-primary text-pop-primary px-2 py-1 rounded-md shadow-md hover:bg-lght-secondary"
            aria-label="bouton diapo précédente"
          >
            <Icon name="chevron-left" />
          </button>

          <img
            className={`size-56 object-cover rounded-lg transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            src={news[index].thumbnail}
            alt={news[index].title}
          />

          <button
            onClick={nextSlide}
            className="absolute z-10 -right-5 bg-lght-primary text-pop-primary px-2 py-1 rounded-md shadow-md hover:bg-lght-secondary"
            aria-label="bouton diapo suivante"
          >
            <Icon name="chevron-right" />
          </button>
        </div>
        <div className="container flex flex-col justify-center items-center text-center gap-1">
          <p className="font-rubik font-medium text-lght-primary">
            {news[index].title}
          </p>
          <p className="font-prompt text-sm text-lght-primary">
            {news[index].subtitle}
          </p>
          <p className="font-prompt text-lght-primary">{news[index].author}</p>
          <a
            className="hover:bg-drk-secondary"
            aria-label="lien web vers l'élément présenté"
            href={news[index].link}
            target="_blank"
          >
            <Icon name="arrow-up" />
          </a>
        </div>
      </div>
    </div>
  );
};
