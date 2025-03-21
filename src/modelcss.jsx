export const Model = () => {
  return (
    <>
      <section className="px-4 py-10 bg-lght-primary dark:bg-drk-primary">
        <div className="container flex-col justify-between mx-auto">
          <h1 className="font-kalam font-bold text-5xl text-pop-primary ">
            titre portfolio
          </h1>
          <h2 className="font-kalam font-semibold text-4xl text-center text-pop-primary dark:text-lght-primary">
            titre section
          </h2>
          <h3 className="font-rubik font-medium text-2xl text-drk-primary dark:text-lght-primary">
            sous-titre
          </h3>
          <p className="font-prompt text-drk-primary dark:text-lght-secondary">
            regular
          </p>
          <p className="font-prompt text-drk-secondary dark:text-lght-secondary">
            regular grey
          </p>
          <a className="font-rubik font-medium  text-drk-primary hover:text-pop-primary dark:text-lght-primary dark:hover:text-pop-secondary ">
            link
          </a>
          <p className="font-prompt font-medium text-pop-primary dark:text-pop-secondary ">
            error message
          </p>
          <button className="m-1 px-3.5 py-1 font-rubik text-lg font-medium shadow-lg rounded-xs duration-150 text-lght-primary bg-pop-primary hover:bg-pop-secondary ">
            Button
          </button>
          <div className="bg-pop-primary p-4">
            <h2 className="font-kalam font-semibold text-4xl text-center text-lght-primary ">
              titre section
            </h2>
            <h3 className="font-rubik font-medium text-2xl text-lght-primary ">
              sous-titre
            </h3>
            <h4 className="font-rubik font-medium text-lg text-lght-primary">
              formations
            </h4>
            <p className="font-prompt text-lght-primary">regular</p>
            <button className="m-1 px-2 py-0.5 font-rubik font-medium shadow-lg rounded-xs duration-150 text-pop-primary bg-lght-primary hover:bg-lght-secondary dark:text-lght-primary dark:bg-drk-primary  dark:hover:bg-drk-secondary">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
