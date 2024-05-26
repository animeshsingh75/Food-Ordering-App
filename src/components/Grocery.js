import comingSoon from "../assets/comingSoon.jpg";

const Grocery = () => {
  return (
    <div className="grocery-container">
      <h1 className="grocery-coming-soon">
        {" "}
        Our grocery online store is coming soon......
      </h1>
      <img src={comingSoon} alt="Coming Soon" />
    </div>
  );
};
export default Grocery;
