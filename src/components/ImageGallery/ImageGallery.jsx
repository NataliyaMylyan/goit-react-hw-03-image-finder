import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";
import s from "./ImageGallery.module.css";

function ImageGallery({ gallery, onClick }) {
  return (
    <ul className={s.ImageGallery} onClick={onClick}>
      {gallery.map((item) => (
        <ImageGalleryItem key={item.id} image={item} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
