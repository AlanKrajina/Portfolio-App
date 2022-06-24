import Layout from "../../Layout/LayoutComponent";
import { styles } from "./reduxGameStyles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImages,
  ImagesMainState,
  imageIsClicked,
  clearSelectedImages,
  resetReduxStates,
} from "../../../app/imagesSlice";
import { AppDispatch } from "../../../app/store";

const ReduxGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const imagesResponse = useSelector((state: ImagesMainState) => state.images);

  useEffect(() => {
    dispatch(resetReduxStates());
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    if (imagesResponse.selectedImages.length === 2) {
      setTimeout(function () {
        dispatch(clearSelectedImages());
      }, 1200);
    }
  }, [dispatch, imagesResponse]);

  return (
    <Layout>
      <div>Dashboard</div>
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
    </Layout>
  );
};

export default ReduxGame;
