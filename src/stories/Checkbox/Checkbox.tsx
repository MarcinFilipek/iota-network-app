import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export const Checkbox = () => (
  <div>
    <input id="checkbox" type="checkbox" />
    <label htmlFor="checkbox">
      <FontAwesomeIcon icon="check" />
    </label>
  </div>
);
