import React, { useEffect, useState, useContext } from "react";
import Painting from "../components/Painting";
import Images from "../images";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import ReactPaginate from "react-paginate";
import axios from "axios";
const Paintings = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const paintingsPerPage = 10;
  const [paintings, setPaintings] = useState([]);
  const pagesVisited = currentPage + paintingsPerPage;
  const displayPaintings = paintings.slice(
    pagesVisited,
    pagesVisited + paintingsPerPage
  );

  const [enlargedImage, setEnlargedImage] = useState();
  console.log(props);

  const onEnlarge = (img) => {
    setEnlargedImage(img);
  };

  useEffect(() => {
    const fetchPaintings = async () => {
      const res = await axios.get(
        "https://artbridgetobaghdad.herokuapp.com/api/paintings"
      );
      setPaintings(res.data);
      setLoading(false);
      console.log(res);
    };
    fetchPaintings();
  }, []);

  return (
    <div className="paintings-page">
      <div className="results-heading bg-primary">
        <h3> Happy Viewing! </h3>
      </div>

      <div className="results">
        <div className="row gap-5 justify-content-center justify-items-center container-lg">
          {paintings.map((painting) => {
            return (
              <Painting
                id={painting.id}
                price={painting.price}
                height={painting.height}
                width={painting.width}
                img_url={painting.img_url}
                onEnlarge={onEnlarge}
              />
            );
          })}
        </div>
      </div>
      <div className="results-bottom bg-secondary"></div>

      <div
        className="modal fade"
        id="reg-modal"
        tabIndex="-1"
        aria-aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ml-4">
                Life in Mespotamia - Amal Maseer
              </h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={enlargedImage} />
            </div>
          </div>
        </div>
      </div>
      <ReactPaginate />
    </div>
  );
};

export default Paintings;
