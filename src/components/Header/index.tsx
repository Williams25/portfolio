import { useCallback, useEffect, useState } from "react";
import { Container, Button } from "../";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";

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

        <div className="logo">
          <Link href="/#">
            <a aria-label="portfolio logo <wg />">
              <Image
                src="/assets/img/logo.svg"
                alt="portfolio logo <wg />"
                width={85}
                height={24}
              />
            </a>
          </Link>
        </div>

        <div className="menu-items">
          <nav>
            <ul>
              <li>
                <Link href="#">
                  <a draggable={false}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a draggable={false}>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a draggable={false}>Projects</a>
                </Link>
              </li>
              <li className="icon">
                <Link href="https://github.com/Williams25">
                  <a
                    aria-label="go to Github"
                    target="_blank"
                    draggable={false}
                  >
                    <FaGithub size={25} />
                  </a>
                </Link>
              </li>
              <li className="icon">
                <Link href="https://www.linkedin.com/in/william-gabriel-291a031b4/">
                  <a
                    aria-label="go to LinkedinIn"
                    target="_blank"
                    draggable={false}
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </Link>
              </li>
              <li className="icon">
                <Button
                  variant="dark"
                  borderColor="#2894ff"
                  title="contact"
                  size="medium"
                  as="a"
                  href="#contact"
                  draggable={false}
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
                  <a draggable={false}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a draggable={false}>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a draggable={false}>Projects</a>
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
