import offline from "../assets/errorImage.jpg";

const UserOffline = () => {
  return (
    <div className="text-center p-5">
      <h1 className="text-[#333333] mt-[100px]">🔴 Offline!</h1>
      <p className=" text-[#505050] text-lg mx-0 my-5">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default UserOffline;
