import "./styles.css";

export const Loader = () => (
  <div className="loader">
    <div className="loader-outer-ring"></div>
    <div className="loader-inner-ring"></div>
    <div className="loader-track-cover"></div>
    <div className="loader-ball">
      <div className="loader-ball-texture"></div>
      <div className="loader-ball-outer-shadow"></div>
      <div className="loader-ball-inner-shadow"></div>
      <div className="loader-ball-side-shadows"></div>
    </div>
  </div>
);
