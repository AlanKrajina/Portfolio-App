import { copyFinishedGame, appRunning } from "../../app/gameSlice";
import { GameMainState } from "../../app/gameSliceInterfaces";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import Button from "../SharedButton/Button";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameOverModal: React.FC<Props> = ({
  setShowModal,
  setShowStatistics,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const singleGameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );

  useEffect(() => {
    const clone = structuredClone(singleGameState);
    const { ...newObj } = clone;
    const updatedObj = {
      ...newObj,
      gameConditionals: {
        ...newObj.gameConditionals,
        isCopy: true,
      },
    };
    dispatch(appRunning(false));
    dispatch(copyFinishedGame(updatedObj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 animate-fade">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Congratulations, you won!
                  </h3>
                  <div className="mt-10">
                    <p className="text-sm text-gray-500">
                      For more information make sure to check out game
                      statistics before reseting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex">
              <Button
                buttonFunction={() => {
                  setShowModal(false);
                  setShowStatistics((prevState) => !prevState);
                }}
                buttonTitle={"Open Statistics"}
                styling={
                  "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm mr-1"
                }
              />

              <Button
                buttonFunction={() => setShowModal(false)}
                buttonTitle={"Close"}
                styling={
                  "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GameOverModal);
