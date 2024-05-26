const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/animeshsingh75/" target="_blank">
        Animesh Singh's LinkedIn Profile
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/animeshsingh75/Food-Ordering-App"
        target="_blank"
        title="Food Ordering App Github Repository"
      >
        <strong>
          &nbsp;Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};
export default Footer;
