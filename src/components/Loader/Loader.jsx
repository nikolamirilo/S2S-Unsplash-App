import PacmanLoader from "react-spinners/PacmanLoader";
import { useGlobalState } from "./../../context/GlobalContext";

const Loader = () => {
  const { width } = useGlobalState();
  return (
    <div className="loader">
      <PacmanLoader size={width > 600 ? 50 : 40} />
    </div>
  );
};

export default Loader;
