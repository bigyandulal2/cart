import UseArrow from "./UseArrow";
export default function HeroActiveImg({
  img,
  serviceList,
  handleClick,
  indexVal,
  setIndexVal,
  setServiceList,
  setClose,
}) {
  function handlePrev() {
    console.log("indexprev", indexVal);
    if (indexVal === 0) {
      return;
    }
    const value = indexVal - 1;

    setIndexVal(value);
    handleClick(value);
  }
  function handleNext() {
    console.log("indexnext", indexVal);
    if (indexVal === 3) {
      return;
    }
    const value = indexVal + 1;
    console.log("i am ok!!next");
    setIndexVal(value);
    handleClick(value);
  }
  function handleClose() {
    setClose(false);
    setIndexVal(0);
  }
  return (
    <div>
      <div id="boss">
        <div id="boss_img_box">
          <div id="boss_close_box" onClick={handleClose}>
            <svg
              id="boss_close"
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
                id="boss_close"
              />
            </svg>
          </div>

          <div id="boss_img_box_active">
            <img src={img} alt="product-1" id="boss_img1" />
            {/* {gsdgsdrg} */}
            <UseArrow handleNext={handleNext} handlePrev={handlePrev} />
          </div>
          <div id="boss_img_box_2" className="flex gap-11">
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
      </div>
    </div>
  );
}
