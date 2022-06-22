import React, { useState } from "react";
import Painting from "../../components/Painting";
import axios from "axios";
import { Axios } from "axios";
import { Image } from "cloudinary-react";
import { TiThLarge } from "react-icons/ti";

const Inventory = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload", "paintings");

    Axios.post(
      "https://api.cloudinary.com/v1_1/copyres/image/upload",
      formData
    ).then((res) => console.log(res));
  };

  const handleAdd = () => {
    uploadImage();
  };

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
    console.log(image);
  };

  return (
    <div className="page">
      <div className="container-inventory">
        <section className="input-area">
          <input
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            placeholder="width"
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />

          <input
            placeholder="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="imagepicker">
            <input
              type="file"
              onChange={(e) => onImageChange(e)}
              id="imagepicker"
            />

            <label for="imagepicker">Choose an Image</label>
          </div>
          <div className="input-area-buttons">
            <button onClick={() => handleAdd()} id="add-button">
              Add
            </button>
            <button id="delete-button">Delete</button>
            <button id="update-button">Update</button>
            <button id="search-button">Search</button>
          </div>
        </section>
        <section className="results-area">
          <div className="inventory-area">
            <Painting
              width={width}
              height={height}
              price={price}
              img_url={image}
              title={title}
              key="er23123"
              id="er23123"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;
