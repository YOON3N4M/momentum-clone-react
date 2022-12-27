import { useEffect, useState } from "react";
import React from "react";

import "../css/Background.css";

function Background() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "BSkq_l1863qp1OeCizkCs1XVT5Kc16gWMD9qK2XquQc";
  const keyword = "wallpapers,landscape";
  const imgQuantity = 20;
  const [imgNum, setImgNum] = useState(Math.floor(Math.random() * imgQuantity));
  const url = `https://api.unsplash.com/search/photos?page=2&query=${keyword}&client_id=${API_KEY}&per_page=${imgQuantity}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? null : (
        <div className="background-image-wrapper">
          <img
            id="background-image"
            src={img[imgNum].urls.full}
            className="fadein visible"
          ></img>
        </div>
      )}
    </div>
  );
}

export default React.memo(Background);
