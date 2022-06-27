import Layout from "../../Layout/LayoutComponent";
import { styles } from "./reduxGameStyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImages,
  ImagesMainState,
  imageIsClicked,
  clearSelectedImages,
  resetReduxStates,
} from "../../../app/imagesSlice";
import { AppDispatch } from "../../../app/store";
import ReduxGameDashboard from "./ReduxGameDashboard";
import ReduxGameStatistics from "./ReduxGameStatistics";

const ReduxGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const imagesResponse = useSelector((state: ImagesMainState) => state.images);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);

  useEffect(() => {
    dispatch(resetReduxStates());
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    if (imagesResponse.selectedImages.length === 2) {
      setTimeout(function () {
        dispatch(clearSelectedImages());
      }, 1000);
    }
  }, [dispatch, imagesResponse]);

  const toggleStatistics = () => {
    setShowStatistics((prevState) => !prevState);
    console.log(showStatistics);
  };

  return (
    <Layout>
      <ReduxGameDashboard
        resetReduxStates={resetReduxStates}
        getImages={getImages}
        toggleStatistics={toggleStatistics}
      />
      {showStatistics ? (
        <ReduxGameStatistics />
      ) : (
        <div id="section" style={styles.ImagesGallery}>
          {imagesResponse.imagesData.map((img) => {
            return (
              <img
                key={img.id}
                src={img.selected ? img.url : img.urlBack}
                style={styles.Image}
                alt={img.name}
                onClick={() => {
                  dispatch(imageIsClicked(img));
                }}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default ReduxGame;
