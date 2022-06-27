import { styles } from "./reduxGameStyles";
import { useDispatch, useSelector } from "react-redux";
import { ImagesMainState } from "../../../app/imagesSlice";
import { AppDispatch } from "../../../app/store";

interface DashboardProps {
  resetReduxStates: any;
  getImages: any;
  toggleStatistics: any;
}

const ReduxGameDashboard: React.FC<DashboardProps> = ({
  resetReduxStates,
  getImages,
  toggleStatistics,
}) => {
  const counter = useSelector((state: ImagesMainState) => state.images.count);
  const dispatch = useDispatch<AppDispatch>();

  const resetGame = () => {
    dispatch(resetReduxStates());
    dispatch(getImages());
  };

  return (
    <div style={styles.DashboardMainDiv}>
      <p>Dashboard</p>
      <p>Counter: {counter}</p>

      <div style={styles.DashboardButtonsDiv}>
        <button
          className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={resetGame}
        >
          Reset Game
        </button>
        <button
          className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={toggleStatistics}
        >
          Check Statistics
        </button>
      </div>
    </div>
  );
};

export default ReduxGameDashboard;
