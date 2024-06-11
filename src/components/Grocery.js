import comingSoon from "../assets/comingSoon.jpg";

const Grocery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="h-full text-center mt-[180px]">
        {" "}
        Our grocery online store is coming soon......
      </h1>
      <img src={comingSoon} alt="Coming Soon" className="h-[400px] w-[60rem]" />
    </div>
  );
};
export default Grocery;
