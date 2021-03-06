import React, { useEffect, useState, useContext } from "react";
import Painting from "../components/Painting";
import Images from "../images";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const desc =
  "A piece that I drew in 2007. It resembles the hardships of life in old Iraq.";

const Paintings = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [paintingsPerPage, setPaintingsPerPage] = useState(4);
  const [paintings, setPaintings] = useState([]);
  console.log(props);
  /*
  useEffect(() => {
    const fetchPaintings = async () => {
      const res = await axios.get(
        "https://artbridgetobaghdad.herokuapp.com/api/paintings"
      );
      setPaintings(res.data);
      setLoading(false);
    };
    fetchPaintings();
  });
  */
  return (
    <div className="paintings-page">
      <div className="results-heading">
        <h3> Happy Viewing! </h3>
      </div>

      <div className="results">
        <Painting
          id="p1"
          price="334.99"
          height="23"
          width="36"
          img_url={Images.painting_1}
          description={desc}
        />
        <Painting
          id="p2"
          price="379.99"
          height="42"
          width="34"
          img_url={Images.painting_2}
          description={desc}
        />
        <Painting
          id="p3"
          price="149.99"
          height="18"
          width="32"
          img_url={Images.painting_3}
          description={desc}
        />
        <Painting
          id="p4"
          price="224.99"
          height="32"
          width="18"
          img_url={Images.painting_4}
          description={desc}
        />
        <Painting
          id="p5"
          price="349.99"
          height="44"
          width="32"
          img_url={Images.painting_5}
          description={desc}
        />
        <Painting
          id="p6"
          price="349.99"
          height="21"
          width="18"
          img_url={Images.painting_1}
          description={desc}
        />
      </div>
      <div className="results-bottom">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="#">
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paintings;
