import cardStyle from "../scss/card.module.scss";

const Card = (props) => {
  const { title, date, desc, image } = props;
  return (
    <div className={cardStyle.card}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={image} alt={title} />
      <p>{desc}</p>
    </div>
  );
};

export default Card;
