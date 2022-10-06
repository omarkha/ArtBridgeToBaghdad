import React, { useEffect, useState, useContext } from "react";
import Painting from "../components/Painting";
import Images from "../images";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import ReactPaginate from "react-paginate";
import axios from "axios";
const Paintings = (props) => {
  const { cartItems, addCartItem, removeCartItem, printCartItems } =
    useContext(CartContext);
  const [added, setAdded] = useState(false);
  const checkAdded = () => {
    cartItems.map((item) =>
      item.id === enlargedImage.id ? setAdded(true) : ""
    );
  };

  const removeItem = () => {
    removeCartItem(enlargedImage.id);
    setAdded(false);
  };

  const addItem = () => {
    addCartItem(
      "painting",
      enlargedImage.id,
      enlargedImage.img_url,
      enlargedImage.price,
      enlargedImage.width,
      enlargedImage.height,
      enlargedImage.title
    );
    setAdded(true);
  };

  useEffect(() => checkAdded(), [cartItems]);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";

  //////////

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const paintingsPerPage = 10;
  const [paintings, setPaintings] = useState([]);
  const pagesVisited = currentPage * paintingsPerPage;
  const displayPaintings = paintings.slice(
    pagesVisited,
    pagesVisited + paintingsPerPage
  );

  const [enlargedImage, setEnlargedImage] = useState({
    img_url: "",
    title: "",
    price: 0,
    width: 0,
    height: 0,
    id: "",
  });
  console.log(props);

  const onEnlarge = (img) => {
    setEnlargedImage({
      img_url: img.img_url,
      title: img.title,
      price: img.price,
      width: img.width,
      height: img.height,
      id: img.id,
    });
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

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="paintings-page">
      <div className="results-heading">
        <h3 className="h3 text-dark"> Happy Viewing! </h3>
      </div>

      <div className="results bg-dark">
        <div className="row gap-5 justify-content-center justify-items-center container-lg">
          {displayPaintings.map((painting) => {
            return (
              <Painting
                id={painting._id}
                key={painting._id}
                price={painting.price}
                height={painting.height}
                width={painting.width}
                title={painting.title}
                img_url={painting.img_url}
                onEnlarge={onEnlarge}
              />
            );
          })}
        </div>
      </div>

      <div
        className="modal fade"
        id="reg-modal"
        tabIndex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg my-0 pb-5">
          <div className="modal-content pb-5">
            <div className="modal-header">
              <h5 className="modal-title ml-4">
                <button
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                {enlargedImage.title}
              </h5>
            </div>
            <div className="modal-body">
              <img src={enlargedImage.img_url} />
              <h3 className="mt-5">
                {enlargedImage.width + ' " x ' + enlargedImage.height + ' "'}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"back"}
        nextLabel={"next"}
        pageCount={Math.ceil(paintings.length / paintingsPerPage)}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Paintings;
