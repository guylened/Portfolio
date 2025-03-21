import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <main className="h-screen  bg-lght-primary dark:bg-drk-primary">
        <section className=" px-10 py-10">
          <div className="container flex flex-wrap-reverse sm:flex-nowrap justify-center items-center gap-6 mx-auto">
            <div className="container flex flex-col justify-center items-center gap-4">
              <h1 className="font-kalam text-center font-bold text-5xl text-pop-primary">
                404
              </h1>
              <h2 className="font-kalam text-center font-bold text-4xl text-drk-primary  dark:text-lght-secondary">
                Une erreur est survenue, veuillez réessayer ultérieurement.
              </h2>
              <div className="p-4 sm:p-8">
                <Link
                  to="/"
                  className="font-prompt text-lg text-justify text-drk-primary dark:text-lght-secondary"
                >
                  Page d'accueil
                </Link>
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
      </main>
    </>
  );
};
