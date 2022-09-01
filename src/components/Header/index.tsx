import { useCallback, useEffect, useState } from "react";
import { Container, Button } from "../";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import * as S from "./styles";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((o) => !o);
  }, [setOpenMenu]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.Header scrolled={scrolled}>
      <Container className="content-header">
        <button
          type="button"
          aria-label="open mobile menu"
          onClick={toggleMenu}
          className="burguer-menu"
        >
          <MdOutlineMenu size={25} />
        </button>

        <div className="logo">logo</div>

        <div className="menu-items">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#" className="icon">
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                <a href="#" className="icon">
                  <FaLinkedinIn size={25} />
                </a>
              </li>
              <li>
                <Button
                  variant="dark"
                  borderColor="#2894ff"
                  title="contact"
                  size="medium"
                />
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      <S.MenuMobile show={openMenu}>
        <div className="menu-mobile">
          <button
            type="button"
            onClick={toggleMenu}
            className="close-burguer-menu"
          >
            <RiCloseLine size={25} />
          </button>

          <nav>
            <a href="#">Home</a>
          </nav>
          <nav>
            <a href="#skills">Skills</a>
          </nav>
          <nav>
            <a href="#">Projects</a>
          </nav>
        </div>
        <span className="overlay" onClick={toggleMenu} />
      </S.MenuMobile>
    </S.Header>
  );
};
