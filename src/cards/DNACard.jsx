function DNACard(props) {
  const { image, title, info } = props;
  return (
    <div className="DNA--Card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}
export default DNACard;
