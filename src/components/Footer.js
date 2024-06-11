const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-wrap justify-center items-center w-auto text-center bg-footer-bg shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.71)] mt-[45px] px-2.5 py-[15px]">
      Created By
      <i className="fa-solid fa-heart text-[darkred] text-[smaller] pt-[3px] pb-0 px-[5px]"></i>
      <a
        href="https://www.linkedin.com/in/animeshsingh75/"
        target="_blank"
        className="font-bold text-dark-blue hover:text-x-dark-orange"
      >
        Animesh Singh's LinkedIn Profile
      </a>
      <i className="fa-solid fa-copyright text-[smaller] pt-[3px] pb-0 px-[5px]"></i>
      {year}
      <a
        href="https://github.com/animeshsingh75/Food-Ordering-App"
        target="_blank"
        className="font-bold text-dark-blue hover:text-x-dark-orange"
        title="Food Ordering App Github Repository"
      >
        <strong className="text-text-color pl-[5px]">
          &nbsp;Food<span className="text-x-dark-orange">Fire</span>
        </strong>
      </a>
    </div>
  );
};
export default Footer;
