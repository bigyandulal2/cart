import React, { useState } from "react";
import Img1 from "../images/image-product-1.jpg";
import Img2 from "../images/image-product-2.jpg";
import Img3 from "../images/image-product-3.jpg";
import Img4 from "../images/image-product-4.jpg";
import ImgThumb1 from "../images/image-product-1-thumbnail.jpg";
import ImgThumb2 from "../images/image-product-2-thumbnail.jpg";
import ImgThumb3 from "../images/image-product-3-thumbnail.jpg";
import ImgThumb4 from "../images/image-product-4-thumbnail.jpg";
import HeroActiveImg from "./HeroActiveImg";
import HeroDetail from "./HeroDetail";
import UseArrow from "./UseArrow";
const images = [
  {
    img: Img1,
    imgThumb: ImgThumb1,
    checked: false,
  },
  {
    img: Img2,
    imgThumb: ImgThumb2,
    checked: false,
  },
  {
    img: Img3,
    imgThumb: ImgThumb3,
    checked: false,
  },
  {
    img: Img4,
    imgThumb: ImgThumb4,
    checked: false,
  },
];

export default function Hero({ close, setClose }) {
  const [img, setImg] = useState(Img1);
  const [serviceList, setServiceList] = useState(images);
  const [indexVal, setIndexVal] = useState(0);

  function handleClick(index) {
    setImg(images[index].img);
    const updatedValue = [...serviceList];
    setClose(true);
    setIndexVal(index);
    updatedValue[index].checked = true;
    setServiceList(updatedValue);
  }
  function handlePrev() {
    if (indexVal === 0) {
      return;
    }
    const value = indexVal - 1;
    setIndexVal(value);
    setImg(images[value].img);
  }
  function handleNext() {
    if (indexVal === 3) {
      return;
    }
    const value = indexVal + 1;
    setIndexVal(value);
    setImg(images[value].img);
  }
  return (
    <div>
      <div
        id="hero"
        className="grid grid-cols-2"
        style={close ? { opacity: 0.1 } : {}}
      >
        <div id="hero_img_box" className="grid grid-cols-1 gap-7">
          <div id="hero_img_box1">
            <img src={img} alt="product-1" />
            <div>
              {/* dgsgsdgdsg */}
              {
                <div id="arrow_mobile">
                  <UseArrow handleNext={handleNext} handlePrev={handlePrev} />
                </div>
              }
            </div>
          </div>
          <div id="hero_img_box2" className="flex w-full gap-11">
            {serviceList.map((x, index) => (
              <img
                src={x.imgThumb}
                key={index}
                alt={` imageThumb${index}`}
                onClick={() => handleClick(index)}
                className={index === indexVal && x.checked ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <HeroDetail />
      </div>
      {close && (
        <HeroActiveImg
          img={img}
          serviceList={serviceList}
          handleClick={handleClick}
          indexVal={indexVal}
          setIndexVal={setIndexVal}
          setServiceList={setServiceList}
          setClose={setClose}
        />
      )}
    </div>
  );
}
