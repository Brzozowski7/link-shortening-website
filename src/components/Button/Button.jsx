import PropTypes from "prop-types";
import { SmallBtn, MediumBtn } from "./Button.styles.js";
import { buttonSize } from "./Button.const.js";
export default function Button({ size, text, onClick, clicked = false }) {
  return size === buttonSize.small ? (
    <SmallBtn clicked={clicked} onClick={onClick}>
      {text}
    </SmallBtn>
  ) : (
    <MediumBtn clicked={clicked} onClick={onClick}>
      {text}
    </MediumBtn>
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(Object.values(buttonSize)),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
};
