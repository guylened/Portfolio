import { useEffect, useState } from "react";
import { Icon } from "../components/icons";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleChange = ({ matches }) => {
      setTheme(matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 font-rubik font-medium bg-lght-primary text-drk-primary dark:bg-drk-primary dark:text-lght-primary">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex gap-0.5">
            <Icon name="sun" />
            <span>/</span>
            <Icon name="moon" />
          </div>
          <label
            htmlFor="toggle"
            className="inline-flex items-center space-x-4 cursor-pointer"
            aria-label="toggle dark-light mode"
          >
            <div className="relative">
              <input
                id="toggle"
                type="checkbox"
                className="hidden peer"
                onChange={handleThemeChange}
              />
              <div className="w-10 h-4 rounded-full shadow bg-lght-secondary peer-checked:dark:bg-pop-secondary"></div>
              <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-pop-primary dark:bg-pop-primary"></div>
            </div>
          </label>
        </div>

        <nav>
          <ul className="hidden space-x-3 md:flex">
            <li className="flex">
              <a
                href="#Projects"
                className="flex items-center px-4 border-b-2 hover:border-pop-primary hover:text-pop-primary active:border-pop-primary active:text-pop-primary"
              >
                Projets
              </a>
            </li>
            <li className="flex">
              <a
                href="#Skills"
                className="flex items-center px-4 border-b-2 hover:border-pop-primary hover:text-pop-primary active:border-pop-primary active:text-pop-primary"
              >
                Technologies
              </a>
            </li>
            <li className="flex">
              <a
                href="#Training"
                className="flex items-center px-4 border-b-2 hover:border-pop-primary hover:text-pop-primary active:border-pop-primary active:text-pop-primary"
              >
                Formations
              </a>
            </li>
            <li className="flex">
              <a
                href="#AboutMe"
                className="flex items-center px-4 border-b-2 hover:border-pop-primary hover:text-pop-primary active:border-pop-primary active:text-pop-primary"
              >
                A propos
              </a>
            </li>
            <li className="flex">
              <a
                href="#Contact"
                className="flex items-center px-4 border-b-2 hover:border-pop-primary hover:text-pop-primary active:border-pop-primary active:text-pop-primary"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            aria-label="bouton du menu version mobile"
            className="p-4 md:hidden"
            onClick={toggleMenu}
          >
            <Icon name={isMenuOpen ? "close" : "nav"} />
          </button>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-lght-primary dark:bg-drk-primary flex flex-col items-center justify-center transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          aria-label="fermer le menu"
          className="absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <Icon name="close" />
        </button>
        <ul className="space-y-6 text-xl">
          <li>
            <a
              href="#Projects"
              className="hover:text-pop-primary"
              onClick={toggleMenu}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-pop-primary"
              onClick={toggleMenu}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#Training"
              className="hover:text-pop-primary"
              onClick={toggleMenu}
            >
              Formations
            </a>
          </li>
          <li>
            <a
              href="#AboutMe"
              className="hover:text-pop-primary"
              onClick={toggleMenu}
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-pop-primary"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
