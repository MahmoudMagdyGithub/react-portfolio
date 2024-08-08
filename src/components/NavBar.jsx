import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex w-[68px] h-[68px] rounded-2xl ml-8 flex-col items-center justify-center bg-slate-950 text-white">
        <div className="card-wrapper h-[68px] w-[68px] flex align-center">
          <div className="card-content flex items-center justify-center text-xs">
            <div className="text-2xl">MM</div>
          </div>
        </div>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://github.com/MahmoudMagdyGithub", "_blank")
          }
        />

        {/* <FaLinkedin /> */}
      </div>
    </nav>
  );
};

export default NavBar;
