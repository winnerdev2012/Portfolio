const Separator = ({ type }) => {
  switch (type) {
    case "up":
      return (
        <img
          alt=""
          className="separator-mobile-up hide-desktop z-1"
          src="assets/separator-mobile-up.png"
        />
      );
    case "down":
      return (
        <img
          alt=""
          className="separator-mobile-up hide-desktop z-1"
          src="assets/separator-mobile-up.png"
        />
      );

    default:
      return (
        <img
          alt=""
          className="separator-mobile-up hide-desktop z-1"
          src="assets/separator-mobile-up.png"
        />
      );
  }
};
export default Separator;
