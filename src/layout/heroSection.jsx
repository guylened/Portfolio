export const HeroSection = () => {
  return (
    <>
      <section className="px-4 py-10 bg-lght-primary dark:bg-drk-primary">
        <div className="container flex flex-wrap-reverse sm:flex-nowrap justify-center items-center gap-6 mx-auto">
          <div className="container flex flex-col justify-center items-center gap-4">
            <h1 className="font-kalam text-center font-bold text-5xl text-pop-primary">
              Guylène Dietrich
            </h1>
            <h2 className="font-kalam text-center font-bold text-4xl text-drk-primary  dark:text-lght-secondary">
              Intégratrice web junior
            </h2>
            <div className="container p-4 sm:p-8">
              <p className="font-prompt text-lg text-justify text-drk-primary dark:text-lght-secondary">
                Passionnée par le développement web, je conçois des interfaces
                modernes et accessibles, alliant design et performance.
                Intégratrice web junior, je transforme des maquettes en
                expériences interactives et fluides. Curieuse et rigoureuse, je
                veille à l’optimisation, à l’accessibilité et aux bonnes
                pratiques du web. Mon objectif : créer des sites intuitifs et
                responsifs, adaptés aux besoins des utilisateurs.
              </p>
            </div>
          </div>
          <div className="container flex justify-center items-center">
            <img
              src="https://xbnomorjhkjgbnbfhmzq.supabase.co/storage/v1/object/public/icon-illustration/DevPics/devLightS.svg"
              alt="Développeuse web"
            />
          </div>
        </div>
      </section>
    </>
  );
};
