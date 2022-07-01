import React, { useState } from "react";
import Painting from "../../components/Painting";
import { TiThLarge } from "react-icons/ti";
import { RiCompassDiscoverLine } from "react-icons/ri";
import axios from "axios";

const Inventory = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [file, setFile] = useState();

  const URI_Atlas = "https://artbridgetobaghdad.herokuapp.com";
  const URI_Local = "http://localhost:5000";

  const uploadImage = async () => {
    console.log(file);
    const fdata = new FormData();
    fdata.append("file", file);
    fdata.append("upload_preset", "paintings");
    const res = await axios
      .post("https://api.cloudinary.com/v1_1/Copyres/image/upload", fdata)
      .then((res) => {
        console.log(res);
        setImageSelected(res.data.secure_url);
      })
      .catch((err) => console.log(err));
  };
  const handleAdd = () => {
    uploadImage();
  };

  const handlePost = () => {
    console.log(imageSelected);
  };

  const [image, setImage] = useState(null);

  const onImageChange = (files) => {
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]));
    }
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
              onChange={(e) => {
                onImageChange(e.target.files);
                setFile(e.target.files[0]);
              }}
              id="imagepicker"
            />

            <label for="imagepicker" className="btn btn-primary">
              Choose Image
            </label>
          </div>
          <button onClick={() => handleAdd()} className="btn btn-secondary">
            Upload Image
          </button>
          <div className="input-area-buttons">
            <button className="btn btn-success" onClick={() => handlePost()}>
              Add
            </button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-warning">Update</button>
            <button className="btn btn-info">Search</button>
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
