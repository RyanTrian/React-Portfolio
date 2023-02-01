import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <h2>Made with ♥ by Minh Truong</h2>
      <div>
        <ul>
          <a href="https://github.com/RyanTrian">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/minhtruong49/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://twitter.com/TruogMinh">
            <li className="logo">
              <FaTwitter />
            </li>
          </a>
          <a href="https://www.codewars.com/users/RyanTrian">
            <li className="logo">
              <SiCodewars />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;