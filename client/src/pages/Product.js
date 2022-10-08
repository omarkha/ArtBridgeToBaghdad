import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      const res = await axios.get(
        `https://localhost:5000/api/paintings/${productId}`
      );
      setProduct(res.data);
      setLoading(false);
      console.log(res);
      console.log("product id from params: " + productId);
    };
    fetchPaintings();
  }, []);

  return (
    <div className="productpage">
      <section>
        <div>
          <img src={product.img_url} />
        </div>
        <div>
          <h4>title here</h4>
          <h4>dimensions here</h4>
          <h4>price here</h4>
        </div>
      </section>
    </div>
  );
};

export default Product;
