import React from "react";
import {
  //FaFacebookF,
  //FaTwitter,
  //FaInstagram,
  FaLinkedinIn,
  //FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  //{ Social: <FaFacebookF />, link: "https://www.facebook.com/rodrigo.s.palma" },
  //{ Social: <FaTwitter />, link: "https://twitter.com/RodrigoStachle1" },
  //{ Social: <FaInstagram />, link: "https://www.instagram.com/rodrigospalma1/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rodrigospalma/" },
  //{ Social: <FaPinterestP />, link: "https://www.pinterest.com/rodrigo_s_palma" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
