import { useEffect, useState } from "react";
import "../css/Background.css";

function Background() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "BSkq_l1863qp1OeCizkCs1XVT5Kc16gWMD9qK2XquQc";
  const keyword = "wallpapers,landscape";
  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${API_KEY}&per_page=20`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.results);
        setLoading(false);
      });
  }, []);
  console.log(img);
  return (
    <div>
      {loading ? null : (
        <div>
          <img
            id="background-image"
            src={img[Math.floor(Math.random() * 20)].urls.full}
          ></img>
        </div>
      )}
    </div>
  );
}

export default Background;
