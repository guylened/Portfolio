import { ContactForm } from "../components/base-forms/contactForm";
import { Icon } from "../components/icons";

export const ContactSection = () => {
  return (
    <>
      <section
        id="Contact"
        className="px-4 py-10 bg-lght-primary dark:bg-drk-primary"
      >
        <div className="container flex flex-wrap-reverse sm:flex-nowrap justify-center items-center gap-6 mx-auto">
          <ContactForm />

          <div className="container flex-col justify-center items-center gap-4 mx-auto">
            <h2 className="font-kalam pb-2 text-center font-bold text-4xl text-pop-primary  dark:text-lght-primary">
              Contactez-moi
            </h2>
            <p className="font-prompt text-center p-4 sm:p-8 text-lg text-drk-primary dark:text-lght-secondary">
              Vous pouvez également me suivre ou me contacter via les réseaux
              sociaux
            </p>
            <div className="flex gap-4 justify-center items-center text-drk-primary  dark:text-lght-primary">
              <a
                aria-label="lien vers linkedin"
                className="size-10 hover:text-pop-primary"
                href="https://www.linkedin.com/in/guyl%C3%A8ne-dietrich-a92b23251/"
                target="_blank"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href="https://github.com/guylened"
                aria-label="lien vers github"
                className="size-10 hover:text-pop-primary"
                target="_blank"
              >
                <Icon name="contactGithub" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
