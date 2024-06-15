import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="github">
          <FaGithub />
        </div>
        <div className="linkedin">
          <FaLinkedin />
        </div>
        <div className="x-twitter">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Menu;
