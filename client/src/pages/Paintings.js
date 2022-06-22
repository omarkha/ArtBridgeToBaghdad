import React, { useEffect, useState } from "react";
import Painting from "../components/Painting";
import Images from "../images";

const desc =
  "A piece that I drew in 2007. It resembles the hardships of life in old Iraq.";

const Paintings = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [paintingsPerPage, setPaintingsPerPage] = useState(4);
  const [paintings, setPaintings] = useState([]);

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
          price="334.99"
          height="23"
          width="36"
          img_url={Images.painting_1}
          description={desc}
        />
        <Painting
          price="379.99"
          height="42"
          width="34"
          img_url={Images.painting_2}
          description={desc}
        />
        <Painting
          price="149.99"
          height="18"
          width="32"
          img_url={Images.painting_3}
          description={desc}
        />
        <Painting
          price="224.99"
          height="32"
          width="18"
          img_url={Images.painting_4}
          description={desc}
        />
        <Painting
          price="349.99"
          height="44"
          width="32"
          img_url={Images.painting_5}
          description={desc}
        />
        <Painting
          price="349.99"
          height="21"
          width="18"
          img_url={Images.painting_1}
          description={desc}
        />
      </div>
      <div className="results-bottom">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paintings;
