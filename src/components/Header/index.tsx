import { useCallback, useEffect, useState } from "react";
import { Container, Button } from "../";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import * as S from "./styles";
import Link from "next/link";

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

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => e.code === "Escape" && setOpenMenu(false)
    );

    return () =>
      window.removeEventListener(
        "keydown",
        (e) => openMenu && e.code === "Escape" && setOpenMenu(false)
      );
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
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Williams25">
                  <a aria-label="go to Github" target="_blank" className="icon">
                    <FaGithub size={25} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/william-gabriel-291a031b4/">
                  <a
                    aria-label="go to LinkedinIn"
                    target="_blank"
                    className="icon"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </Link>
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

      <S.MenuMobile
        show={openMenu}
        aria-hidden={openMenu}
        aria-expanded={openMenu}
      >
        <div className="menu-mobile">
          <button
            type="button"
            onClick={toggleMenu}
            className="close-burguer-menu"
          >
            <RiCloseLine size={25} />
          </button>

          <nav>
            <ul>
              <li>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <span className="overlay" onClick={toggleMenu} />
      </S.MenuMobile>
    </S.Header>
  );
};
