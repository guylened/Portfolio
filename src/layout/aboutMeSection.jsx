export const AboutMeSection = () => {
  return (
    <>
      <section
        id="AboutMe"
        className="px-4 py-10 bg-lght-primary dark:bg-drk-primary"
      >
        <div className="container flex flex-col justify-center items-center gap-6 mx-auto">
          <h2 className="font-kalam font-semibold text-4xl text-center text-pop-primary dark:text-lght-primary">
            A propos
          </h2>
          <p className="font-prompt text-justify text-drk-primary dark:text-lght-secondary">
            J’ai toujours aimé apprendre et explorer de nouvelles compétences,
            souvent en autodidacte. Podcasts, audiolivres, MOOCs et tutoriels
            sont mes outils du quotidien pour me perfectionner et suivre
            l’évolution du web. Au-delà du développement, je m’intéresse à la
            transformation du monde du travail, où l’apprentissage continu et
            l’adaptabilité deviennent essentiels. Le podcast Les métiers du
            futur d’Isabelle Rouhan illustre bien cette vision : les métiers
            évoluent, et avec eux, les compétences à développer. Plutôt qu’une
            contrainte, je vois cette évolution comme une opportunité d’innover
            et de créer. En tant qu’intégratrice web, je suis convaincue que la
            curiosité et l’agilité sont les clés pour bâtir le web de demain.
          </p>
        </div>
      </section>
    </>
  );
};
