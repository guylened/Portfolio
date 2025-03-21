import PropTypes from "prop-types";

const FIELD_TYPES = {
  USERNAME: 1,
  EMAIL: 2,
  PASSWORD: 3,
  TOPIC: 4,
  MESSAGE: 5,
};

export const Field = ({ type, value, onChange }) => {
  switch (type) {
    case FIELD_TYPES.USERNAME:
      return (
        <>
          <div className="container flex flex-col mx-auto">
            <label
              className="font-prompt text-drk-primary dark:text-lght-primary"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className="font-prompt p-2 text-drk-secondary rounded-sm shadow-sm border-1 border-drk-primary invalid:text-pop-secondary focus:border-pop-primary focus:outline focus:outline-pop-primary dark:border-lght-secondary dark:bg-drk-secondary  dark:text-lght-primary"
              type="text"
              id="name"
              autoComplete="name"
              onChange={onChange}
              value={value}
              required
            />
          </div>
        </>
      );

    case FIELD_TYPES.EMAIL:
      return (
        <>
          <div className="container flex flex-col mx-auto">
            <label
              className="font-prompt text-drk-primary dark:text-lght-primary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="font-prompt p-2 text-drk-secondary rounded-sm shadow-sm border-1 border-drk-primary invalid:text-pop-secondary focus:border-pop-primary focus:outline focus:outline-pop-primary dark:border-lght-secondary dark:bg-drk-secondary  dark:text-lght-primary"
              type="email"
              id="email"
              autoComplete="email"
              onChange={onChange}
              value={value}
              required
            />
          </div>
        </>
      );
    case FIELD_TYPES.PASSWORD:
      return (
        <>
          <div className="container flex flex-col mx-auto">
            <label
              className="font-prompt text-drk-primary dark:text-lght-primary"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="font-prompt p-2 text-drk-secondary rounded-sm shadow-sm border-1 border-drk-primary invalid:text-pop-secondary focus:border-pop-primary focus:outline focus:outline-pop-primary dark:border-lght-secondary dark:bg-drk-secondary  dark:text-lght-primary"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
              defaultValue={value}
              required
            />
          </div>
        </>
      );
    case FIELD_TYPES.TOPIC:
      return (
        <>
          <div className="container flex flex-col mx-auto">
            <label
              className="font-prompt text-drk-primary dark:text-lght-primary"
              htmlFor="sujet"
            >
              Sujet
            </label>
            <input
              className="font-prompt p-2 text-drk-secondary rounded-sm shadow-sm border-1 border-drk-primary invalid:text-pop-secondary focus:border-pop-primary focus:outline focus:outline-pop-primary dark:border-lght-secondary dark:bg-drk-secondary  dark:text-lght-primary"
              type="text"
              id="sujet"
              onChange={onChange}
              value={value}
              required
            />
          </div>
        </>
      );
    case FIELD_TYPES.MESSAGE:
      return (
        <>
          <div className="container flex flex-col mx-auto">
            <label
              className="font-prompt text-drk-primary dark:text-lght-primary"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="font-prompt p-2 text-drk-secondary rounded-sm shadow-sm border-1 border-drk-primary invalid:text-pop-secondary focus:border-pop-primary focus:outline focus:outline-pop-primary dark:border-lght-secondary dark:bg-drk-secondary  dark:text-lght-primary "
              rows="5"
              id="message"
              onChange={onChange}
              required
              value={value}
            ></textarea>
          </div>
        </>
      );
    default:
      return null;
  }
};

Field.defaultProps = {
  value: "",
};

Field.propTypes = {
  type: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
