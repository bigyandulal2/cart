export default function UseArrow({ handlePrev, handleNext }) {
  return (
    <>
      <div id="boss_previous_box" onClick={handlePrev}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            id="boss_previous"
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div id="boss_next_box" onClick={handleNext}>
        <svg
          id="boss_next"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="boss_next"
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}
