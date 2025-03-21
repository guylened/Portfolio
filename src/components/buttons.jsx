import PropTypes from "prop-types";

const BUTTON_TYPES = {
  ACTION: 1,
  SUBMIT: 2,
};

export const Button = ({ type, value, onClick }) => {
  switch (type) {
    case BUTTON_TYPES.ACTION:
      return (
        <button
          type="button"
          className="m-1 px-2 py-0.5 font-rubik font-medium shadow-lg rounded-xs duration-150 text-pop-primary bg-lght-primary hover:bg-lght-secondary dark:text-lght-primary dark:bg-drk-primary  dark:hover:bg-drk-secondary"
          onClick={onClick}
        >
          {value}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      return (
        <button
          type="submit"
          className="m-1 px-3.5 py-1 font-rubik text-lg font-medium shadow-lg rounded-xs duration-150 text-lght-primary bg-pop-primary hover:bg-pop-secondary"
        >
          {value}
        </button>
      );
  }
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.number.isRequired,
  value: PropTypes.string,
};
