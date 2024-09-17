import "./BoxItem.css";



const BoxItem = ({
  bgImageBlur,
  colorBox = "#FFD700",
  cncImage,
  titleBox,
  description1Box,
  description2Box,
}) => {
  return (
    <div
      className="containerBoxItem"
      style={{ "--bgImageBlur": `url(${bgImageBlur})` }}
    >
      <section className="sectionBox" style={{ "--colorTheme": colorBox }}>
        <img src={cncImage} alt="cncImage" className="image-cnc" />
      </section>
      <section className="sectionBox">
        <h2 style={{ color: colorBox }} className="titleCNC">
          {titleBox}
        </h2>
        <p className="parraf">{description1Box}</p>
        <p className="parraf">{description2Box}</p>
      </section>
    </div>
  );
};

export default BoxItem;
