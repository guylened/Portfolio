import PropTypes from "prop-types";
import { useState } from "react";
import { Icon } from "../icons";

export const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);

  return (
    <>
      {children({ isOpened, setIsOpened })}

      {isOpened && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 transition-opacity"
          onClick={() => setIsOpened(false)}
        >
          <div
            className="relative max-w-2xl w-full mx-8 p-6 pt-14 bg-lght-primary dark:bg-drk-primary rounded-lg shadow-lg transition-transform transform scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3"
              type="button"
              onClick={() => setIsOpened(false)}
              aria-label="Fermer la modale"
            >
              <Icon name="close" />
            </button>

            {Content}
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  opened: false,
};

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType])
    .isRequired,
  children: PropTypes.func.isRequired,
};
