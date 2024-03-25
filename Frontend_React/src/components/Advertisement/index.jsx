import React from "react";
import "./style.scss";
import AdvertisementImage from "../../assets/image/AdvertisementImage";
const Advertisement = () => {
  const { firstPicture, vectorOne, arrow } = AdvertisementImage;
  return (
    <div className="advertisement-section">
      <div className="advertisement-layout">
        <div className="first-section">
          <div className="section-image">{firstPicture}</div>
          <div className="for-fun"></div>
        </div>
        <div className="second-section">
          <div className="for-fun"></div>
          <div className="section-content">
            {vectorOne}
            <div className="content-layout">
              <div className="first-content"> Trusted design</div>
              <div className="second-content"> Our Products</div>
              <div className="third-content">
              Creating memorable residential & hospitality spaces with unparalleled craftsmanship, 
              structural integrity, custom design, comfort & luxury
              </div>
              <div className="shop-collection-btn">
                <p>Shop collections</p> {arrow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
